
import { Component, OnInit } from '@angular/core';
import { EventService } from '../Services/event.service';
import { MapDisplayFrontAzizComponent } from '../map-display-front-aziz/map-display-front-aziz.component';
import { VenueService } from '../Services/venueManagement/venue.service';
import { Venue } from '../core/venue';

@Component({
  selector: 'app-view-shedule',
  templateUrl: './view-shedule.component.html',
  styleUrls: ['./view-shedule.component.css']
})

export class ViewSheduleComponent implements OnInit {

  schedule: string[] = [];   
  map: any;
  isEventFull: string = '';
  venue!: Venue 
  
  constructor(private eventService: EventService, private venueService: VenueService) {}

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




}
