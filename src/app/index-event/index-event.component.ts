import { Component, OnInit } from '@angular/core';
import { EventService } from '../Services/event.service';

import { Event } from '../core/event';
import { DisplayTimeEventPopUpComponent } from '../display-time-event-pop-up/display-time-event-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-index-event',
  templateUrl: './index-event.component.html',
  styleUrls: ['./index-event.component.css']
})
export class IndexEventComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe(
      (data: Event[]) => {
        this.events = data;
      },
      (error) => {
        console.error('Error while fetching events:', error);
      }
    );
  }


  displayTimeRemaining(eventId: number): void {
    this.eventService.displayTimeRemainingForEvent(eventId)
      .subscribe(() => {
        console.log('Temps restant récupéré avec succès pour l\'événement avec l\'ID ' + eventId);
        // Ouvrir la boîte de dialogue avec le temps restant récupéré
        this.openDialog(eventId);
      }, error => {
        console.error('Une erreur s\'est produite lors de la récupération du temps restant pour l\'événement avec l\'ID ' + eventId + ':', error);
        // Gérez l'erreur selon vos besoins
      });
  }

  openDialog(eventId: number): void {
    const dialogRef = this.dialog.open(DisplayTimeEventPopUpComponent, {
      data: { eventId } // Passage de l'ID de l'événement à la boîte de dialogue via la propriété 'data'
    });
  }

  

}
