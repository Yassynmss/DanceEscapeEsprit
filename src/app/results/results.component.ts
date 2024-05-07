import { Component, OnInit, ViewChild } from '@angular/core';
import { ParticipationService } from '../Services/participation.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ChartType, ChartOptions, ChartData } from 'chart.js';
import { TooltipLabelStyle } from 'chart.js/auto'; // Corrected import statement
import { Participation } from '../core/particpation';
import { NgChartsConfiguration } from 'ng2-charts';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  participations: Participation[] = [];
  pieChartData: ChartData = {
    labels: [],
    datasets: [{
      data: [],
      label: 'Total Votes'
    }]
  };
  pieChartOptions = {
    responsive: true
  };

  constructor(private participationService: ParticipationService) { }

  ngOnInit(): void {
    this.loadParticipations();
  }

  loadParticipations() {
    this.participationService.fetchParticipationList().subscribe(participations => {
      this.participations = participations;

      // Process data for chart
      const totalVotes = this.participations.map(participation => participation.totalVotes);
      const totalVotesSum = totalVotes.reduce((acc, votes) => acc + votes, 0);

      // Assign datasets to pieChartData.datasets
      this.pieChartData.datasets[0].data = totalVotes.map(votes => (votes / totalVotesSum) * 100);

      // Assign labels to pieChartData.labels
      this.pieChartData.labels = this.participations.map(participation => `Participant ${participation.participantCode}`);
    });
  }
}