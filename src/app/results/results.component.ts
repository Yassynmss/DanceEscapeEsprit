import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef, TemplateRef, ViewContainerRef  } from '@angular/core';
import Chart from 'chart.js/auto';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit {
  participations: Participation[] = [];
  @ViewChild('chartsContainer') chartsContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('chartTemplate') chartTemplate!: TemplateRef<any>;

  constructor(
    private participationService: ParticipationService,
    private changeDetectorRef: ChangeDetectorRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.fetchParticipationData();
  }

  fetchParticipationData() {
    const participationObserver: Observer<Participation[]> = {
      next: (participations: Participation[]) => {
        this.participations = participations;
        this.createCharts();
      },
      error: (error: any) => {
        console.error('Error fetching participation data:', error);
      },
      complete: () => {
        // This is an empty complete callback to satisfy the deprecation warning
      }
    };
  
    this.participationService.fetchParticipationList().subscribe(participationObserver);
  }
  
  
  createCharts() {
    // Clear previous canvas elements
    this.chartsContainer.nativeElement.innerHTML = '';

    this.participations.forEach(participation => {
      const context = { id: 'chart_' + participation.id_participation };
      const viewRef = this.viewContainerRef.createEmbeddedView(this.chartTemplate, context);
      const canvas = viewRef.rootNodes[0] as HTMLCanvasElement;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Votes', 'Remaining'],
            datasets: [{
              data: [participation.totalVotes || 0, 100 - (participation.totalVotes || 0)],
              backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)'
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            cutout: 80,
            responsive: true,
            maintainAspectRatio: false
          }
        });
      } else {
        console.error('Failed to get 2D context for canvas:', 'chart_' + participation.id_participation);
      }
    });

    // Trigger change detection
    this.changeDetectorRef.detectChanges();
  }
}