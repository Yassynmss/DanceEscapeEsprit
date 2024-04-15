import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() eventId!: number; // Input to receive eventId from parent component
  @Output() participationAdded: EventEmitter<void> = new EventEmitter<void>();


  constructor(private formBuilder: FormBuilder , private participationService : ParticipationService,private dialogRef: MatDialogRef<AddParticipationComponent>) {
    this.participationForm =this.formBuilder.group({
      userId: ['', [Validators.required, Validators.pattern('[0-9]+')]], // Add userId field to the form
      eventId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      showtime: ['', Validators.required],
      totalVotes: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }
  addPart(): void {
    if (this.participationForm.valid) {
      const newParticipation: Participation = this.participationForm.value as Participation;
      const userId: number = this.participationForm.get('userId')?.value;
      
      this.participationService.addParticipationAndAffectUser(newParticipation, this.eventId, userId)
        .subscribe(() => {
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
  

