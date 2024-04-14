import { Component,OnInit } from '@angular/core';
import { EventService } from '../Services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../core/event';
import { EventComponent } from '../event/event.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-eventupdate',
  templateUrl: './eventupdate.component.html',
  styleUrls: ['./eventupdate.component.css']
})  
export class EventupdateComponent  implements OnInit {
  eventForm!: FormGroup;
  editingEvent: Event | null = null;
  
  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      name_event: ['', Validators.required],
      date_event: ['', Validators.required],
      location_event: ['', Validators.required],
      theme_event: ['', Validators.required],
      regulations: ['', Validators.required],
      nb_competitions: ['', Validators.required],
      sales_counters_event: ['', Validators.required],
      public_capacity: ['', Validators.required],
      sound_system_event: ['', Validators.required],
      typeevent: ['', Validators.required],
      kids: ['']
    });

    // Récupérer l'ID de l'événement depuis l'URL
    const eventId = Number(this.route.snapshot.paramMap.get('id'));

    // Récupérer les détails de l'événement à partir de l'ID
    this.eventService.getEventById(eventId).subscribe(
      (event: Event) => {
        // Préremplir le formulaire avec les détails de l'événement
        this.editingEvent = event;
        this.eventForm.patchValue({
          name_event: event.name_event,
          date_event: event.date_event,
          location_event: event.location_event,
          theme_event: event.theme_event,
          regulations: event.regulations,
          nb_competitions: event.nb_competitions,
          sales_counters_event: event.sales_counters_event,
          public_capacity: event.public_capacity,
          sound_system_event: event.sound_system_event,
          typeevent: event.typeevent,
          kids: event.kids
        });
      },
      (error) => {
        console.error('Error retrieving event details:', error);
      }
    );
  }

  updateEvent(): void {
    if (this.eventForm.valid && this.editingEvent) {
      const updatedEvent: Event = {
        ...this.editingEvent,
        ...this.eventForm.value
      };

      this.eventService.updateEvent(updatedEvent).subscribe(
        () => {
          console.log('Event updated successfully');
          this.router.navigate(['/events']); // Rediriger vers la liste des événements après la mise à jour
        },
        (error) => {
          console.error('Error updating event:', error);
        }
      );
    }
  }
}
  

 
  

  
  
  
 

    
  

