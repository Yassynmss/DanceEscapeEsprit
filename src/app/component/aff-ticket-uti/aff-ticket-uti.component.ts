import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TicketsService
@Component({
  selector: 'app-aff-ticket-uti',
  templateUrl: './aff-ticket-uti.component.html',
  styleUrls: ['./aff-ticket-uti.component.css']
})
export class AffTicketUtiComponent {
  private apiURL = "http://localhost:8080/";

  ticketDetails: any;

  constructor(private http: HttpClient,private tickets :TicketsService) { }

  bookTicket(eventId: number) {
    this.http.get<any[]>(this.apiURL +`/${eventId}/tickets`).subscribe(response => {
      this.ticketDetails = response;
      // Affichez les détails du ticket dans votre interface utilisateur ici
    });
  }
  
  addOrUpdateTicket(idEvent: number) {
    // Exemple de données de ticket
    const ticketData = {
      // Ajoutez ici les propriétés de votre ticket
    };

    this.tickets.addOrUpdateTicketWithEvent(idEvent, ticketData)
      .subscribe(
        response => {
          console.log('Ticket ajouté/modifié avec succès :', response);
          // Gérer la réponse en cas de succès
        },
        error => {
          console.error('Erreur lors de l\'ajout/modification du ticket :', error);
          // Gérer la réponse en cas d'erreur
        }
      );
  }


  }
 

