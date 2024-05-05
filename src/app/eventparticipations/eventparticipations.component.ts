import { Component } from '@angular/core';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-eventparticipations',
  templateUrl: './eventparticipations.component.html',
  styleUrls: ['./eventparticipations.component.css']
})
export class EventparticipationsComponent   {
  participations: Participation[] = [];
/////////////Get the event ID 

  eventId: number = 1;
/////////////////////////////////
////////////////////

  private subscription: Subscription | undefined;

  constructor(private participationService: ParticipationService) { }


  ngOnInit(): void {
    // Initial fetch of participations for the default event ID (can be changed later)
    this.fetchParticipations();
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