
import { Component, OnInit } from '@angular/core';
import { EventService } from '../Services/event.service';
import { MapDisplayFrontAzizComponent } from '../map-display-front-aziz/map-display-front-aziz.component';
import { VenueService } from '../Services/venueManagement/venue.service';
import { Venue } from '../core/venue';
import { Event } from '../core/event';
import { ParticipationService } from '../Services/participation.service';
import { Participation } from '../core/particpation';

@Component({
  selector: 'app-view-shedule',
  templateUrl: './view-shedule.component.html',
  styleUrls: ['./view-shedule.component.css']
})

export class ViewSheduleComponent implements OnInit {
  events: Event[] = [];
  schedule: string[] = [];   
  map: any;
  isEventFull: string = '';
  venue!: Venue 
  
  constructor(private eventService: EventService, private venueService: VenueService,
    private participationService: ParticipationService) {}

  ngOnInit(): void {
    // Appel de la méthode generateSchedule avec des valeurs d'exemple
    this.eventService.generateSchedule(123, '12:00', 60, 5).subscribe(schedule => {
      this.schedule = schedule;

      // Récupérer les détails du venue
      this.venueService.getVenueById(this.venue.id_venue).subscribe((venue: Venue) => {
        this.venue = venue;
        // Utiliser l'ID du venue pour vérifier si l'événement est complet
        this.checkEventFull(this.venue.id_venue);
      });
    });
  }

  checkEventFull(venueId: number): void {
    // Appel de la fonction isEventFull depuis le service VenueService
    this.venueService.isEventFull(venueId).subscribe((response: string) => {
      this.isEventFull = response;
      console.log("Is Event Full:", this.isEventFull);
    });
  }

  addParticipation(): void {
    const eventId = 1; // Assuming eventId is fixed as 1
    const userId = 1; // Assuming userId is fixed as 1
    const totalVotes = 0; // Assuming totalVotes is fixed as 0

    const newParticipation: Participation = {
      id_participation: 0, // This value will be ignored by the server since it's generated
      showtime: null, // Adjust the default value as needed
      participantCode: 0, // Assuming userId is the participantCode
      totalVotes: totalVotes, // Assign totalVotes
      status: 'PENDING', // Default status
      expirationDate: new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)), // Default expiration date (7 days from today)
      notes: 'Waiting for Approval', // Default notes
    };

    // Call the service method to add the participation
    this.participationService.addParticipationAndAffectUser(newParticipation, eventId, userId).subscribe(() => {
      alert('Participation Added Successfully.');
    });
  }


}
