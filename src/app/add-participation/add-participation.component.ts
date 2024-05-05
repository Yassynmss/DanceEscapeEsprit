
import { Component, EventEmitter, Output } from '@angular/core';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-participation',
  templateUrl: './add-participation.component.html',
  styleUrls: ['./add-participation.component.css']
})
export class AddParticipationComponent {
  participationForm! : FormGroup;
  showtime!: Date; 

  @Output() participationAdded: EventEmitter<void> = new EventEmitter<void>();


  constructor(private formBuilder: FormBuilder , private participationService : ParticipationService,private dialogRef: MatDialogRef<AddParticipationComponent>) {
    this.participationForm =this.formBuilder.group({
      userId: ['', [Validators.required, Validators.pattern('[0-9]+')]], // Add userId field to the form
      eventId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
       totalVotes: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }
  addPart() {
    if (this.participationForm.valid) {
      const userId: number = this.participationForm.get('userId')?.value;
      const eventId: number = this.participationForm.get('eventId')?.value;
      const totalVotes: number = this.participationForm.get('totalVotes')?.value;
  
      // Create a new Participation object
      const newParticipation: Participation = {
        id_participation: 0, // This value will be ignored by the server since it's generated
        showtime: null, // Adjust the default value as needed
        participantCode: 0, // Assuming userId is the participantCode
        totalVotes: totalVotes, // Assign totalVotes from the form
        status: 'PENDING', // Default status
        expirationDate: new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)), // Default expiration date (7 days from today)
        notes: 'Waitig for Approval', // Default notes
      };
  
      // Call the service method to add the participation
      this.participationService.addParticipationAndAffectUser(newParticipation, eventId, userId).subscribe(() => {
        this.participationAdded.emit();
        this.participationForm.reset();
        alert('Participation Added Successfully.');
        this.dialogRef.close(); // Close the dialog
      });
    } else {
      alert("Please fill out all the fields.");
    }
  }

  
}

