import { Component, Input } from '@angular/core';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';
import { Subscription } from 'rxjs';
import { EventComponent } from '../event/event.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventparticipations',
  templateUrl: './eventparticipations.component.html',
  styleUrls: ['./eventparticipations.component.css']
})
export class EventparticipationsComponent   {
  participations: Participation[] = [];
  private subscription: Subscription | undefined;
  eventId: number=7; // Input to receive eventId from parent component

  constructor(private route: ActivatedRoute,private participationService: ParticipationService) { }


  ngOnInit(): void {
    // Initial fetch of participations for the default event ID (can be changed later)
    this.route.params.subscribe(params => {
      this.eventId = +params['eventId'];
      this.fetchParticipations();
    });
  }
  
  fetchParticipations(): void {
    this.subscription = this.participationService.getParticipationsByEventId(this.eventId)
      .subscribe({
        next: (participations) => {
          this.participations = participations;
          console.log('Fetched participations:', this.participations);
        },
        error: (error) => {
          console.error('Error fetching participations:', error);
        }
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the subscription to avoid memory leaks
    this.subscription?.unsubscribe();
  }

  onFetchParticipations(): void {
    // Call this method when a button is pressed to fetch participations for a specific event ID
    this.fetchParticipations();
  }
}
