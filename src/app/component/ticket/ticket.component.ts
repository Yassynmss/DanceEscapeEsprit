import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from 'chart.js';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  tickets: any[] = []; // Déclarer la variable tickets
  deleteSuccess: boolean = false; // Ajouter la propriété deleteSuccess
  searchForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private ticketservice: TicketsService) {
    this.searchForm = this.formBuilder.group({
      title: [''],
      price: [''],
      eventId: ['']
    });
  
  }
  ngOnInit() {
    this.getAllTickets();
  }
  getAllTickets(){
    this.ticketservice.getAllTickets().subscribe(res=>{
      this.tickets = res; // Initialiser la variable tickets avec les données récupérées

      console.log(res);
      
    })
  }
  deleteTicket(id_ticket: any) {
    console.log("id from delete method", id_ticket)
    this.ticketservice.deleteTicket(id_ticket).subscribe((res) => {
      console.log(res);
      // Supprimer le ticket de la liste après la suppression réussie
      this.tickets = this.tickets.filter(ticket => ticket.id_ticket !== id_ticket);
    });
  }
  
  searchTicket() {
    const searchCriteria = this.searchForm.value;
    this.ticketservice.searchTicket(searchCriteria).subscribe(res => {
      console.log(res);
      this.tickets = res;
    });
  }


}
