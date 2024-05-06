import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-ticket-update',
  templateUrl: './ticket-update.component.html',
  styleUrls: ['./ticket-update.component.css']
})
export class TicketUpdateComponent {
  validateForm!: FormGroup;
  
  id_ticket: any = this.activatedRoute.snapshot.params['id_ticket']
  updateSuccess: boolean = false;

  constructor(private ticketservice: TicketsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute) { }
    ngOnInit() {
      this.validateForm = this.fb.group({
        title: ['', [Validators.required]],
        price: ['', Validators.required],
        ticketType: ['', Validators.required]
      })
      this.getticketbyId();
    }
    getticketbyId(){
      this.ticketservice.getTicketById(this.id_ticket).subscribe((res)=>{
        console.log(res);
        this.validateForm.patchValue(res);   
      })
    }

    updateTicket() {
      this.ticketservice.updateTicket(this.id_ticket, this.validateForm.value).subscribe(res => {
        console.log(res);
        this.updateSuccess = true; // Définir la mise à jour réussie
      })
    }
  
}

