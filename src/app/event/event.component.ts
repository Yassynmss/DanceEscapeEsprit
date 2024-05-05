import { Component } from '@angular/core';
import { EventService } from '../Services/event.service';
import { Event } from '../core/event';
import { EventaddComponent } from '../eventadd/eventadd.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DisplayTimeEventPopUpComponent } from '../display-time-event-pop-up/display-time-event-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddParticipationComponent } from '../add-participation/add-participation.component';







@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  events: Event[] = [];
  editingEvent: Event | null = null;
  eventForm!: FormGroup;
  


  constructor(private eventService: EventService, private dialog: MatDialog, private router: Router) { }


  

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(): void { 
    this.eventService.getAllEvents().subscribe(
      data => {
        this.events = data;
      },
      error => {
        console.error('Error getting event:', error);
        // Handle errors
      }
    );


    
  }
  showParticipations(eventId: number): void {
    // Navigate to EventparticipationsComponent with the eventId
    this.router.navigate(['/eventparticipations', eventId]);
  }

  
  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id)
      .subscribe(
        () => {
          console.log('Event deleted successfully');
          // Vous pouvez mettre à jour votre interface utilisateur ici si nécessaire
        },
        error => {
          console.error('Error deleting event:', error);
          // Gérez les erreurs ici, par exemple, affichez un message à l'utilisateur
        }
      );
  }


  createEvent(): void {
    if (this.eventForm.valid){
      const newEvent:Event = this.eventForm.value as Event;
      this.eventService.createEvent(newEvent).subscribe(
        (response: any) => {
            console.log(response);
            // Handle successful response here, e.g., show a success message
        },
        (error) => {
            console.error(error);
            // Handle error, e.g., show an error message
        }
    );
    }}

    updateEvent(): void{
      if (this.editingEvent && this.eventForm.valid)
      {
        const update: Event= {...this.editingEvent, ...this.eventForm.value} as Event;
        this.eventService.createEvent(update).subscribe(():void =>
        {
          this.createEvent();
          this.eventForm.reset();
          this.editingEvent=null;
        });

        


      }}

      editevent(eventss:Event):void {
        this.editingEvent =eventss;
        this.eventForm.patchValue({
            id_event: eventss.id_event,
            name_event: eventss.name_event,
            date_event: eventss.date_event,
            location_event: eventss.location_event,
            theme_event: eventss.theme_event,
            regulations: eventss.regulations,
            nb_competitions: eventss.nb_competitions,
            sales_counters_event: eventss.sales_counters_event,
            public_capacity: eventss.public_capacity,
            sound_system_event: eventss.sound_system_event,
            typeevent: eventss.typeevent,
            kids: eventss.kids});
          }


          displayTimeRemaining(eventId: number): void {
            this.eventService.displayTimeRemainingForEvent(eventId).subscribe(
              (timeRemaining: string) => {
                console.log('Temps restant récupéré avec succès pour l\'événement avec l\'ID ' + eventId);
                this.openDialog(timeRemaining);
              },
              (error) => {
                console.error('Une erreur s\'est produite lors de la récupération du temps restant pour l\'événement avec l\'ID ' + eventId + ':', error);
              }
            );
          }
        
          openDialog(timeRemaining: string): void {
            const dialogRef = this.dialog.open(DisplayTimeEventPopUpComponent, {
              data: { timeRemaining }
            });
          }

          showAddParticipationDialog(eventId: number): void {
            const dialogRef = this.dialog.open(AddParticipationComponent, {
              data: { eventId }, // Pass eventId to the dialog
              width: '400px' // Set dialog width if needed
            });
        
            dialogRef.afterClosed().subscribe(() => {
              // You can perform any action after dialog is closed, like refreshing data
              console.log('Add participation dialog closed.');
            });
          }

         


  


  
}
