import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/services/tickets.service';
import { Event } from 'src/app/core/event';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {
  qrCodeData: string = ''; // Déclaration de la propriété qrCodeData
  validateForm!: FormGroup;
  successMessage: string = '';
  events: Event[] = []; // Initialisation de la liste des événements à un tableau vide


  constructor(private ticketservice: TicketsService, private fb: FormBuilder,private eventService: EventService) {

    this.validateForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', Validators.required,Validators.min(0)],
      quantity:['', Validators.required,Validators.min(0)],
      eventId: [Validators.required] // Add validation for eventId
    });
  }
  ngOnInit(): void {
    this.loadEvents(); // Appel de la méthode pour charger les événements au chargement du composant
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events;
    }, error => {
      console.error('Error while loading events:', error);
    });
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      const formData = this.validateForm.value;
      const idEvent = formData.eventId;
  
      this.ticketservice.addOrUpdateTicketWithEvent(idEvent, formData).subscribe(response => {
        console.log('Ticket successfully added:', response);
        this.successMessage = 'Ticket successfully added.';
        this.validateForm.reset();
      }, error => {
        console.error('Error while adding ticket:', error);
      });
    } else {
      console.error('The form is invalid.');
    }
}
}