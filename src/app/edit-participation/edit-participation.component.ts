
import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { MatStepper  } from '@angular/material/stepper';


@Component({
  selector: 'app-edit-participation',
  templateUrl: './edit-participation.component.html',
  styleUrls: ['./edit-participation.component.css']
})
export class EditParticipationComponent {

  @ViewChild('stepper') stepper!: MatStepper; // Use MatStepper
  participationForm!: FormGroup;
  participation!: Participation;

  constructor(
    private formBuilder: FormBuilder,
    private participationService: ParticipationService,
    public dialogRef: MatDialogRef<EditParticipationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  )  {
    this.participationForm = this.formBuilder.group({
      status: ['', Validators.required],
      showtime: [''], // Optional field for APPROVED status
      totalVotes: [''],
      notes: [''] // Optional field for APPROVED status
    });
  }

  ngOnInit(): void {
    this.participationForm.patchValue(this.data.participation);

    this.participationForm.get('status')?.valueChanges.subscribe((value) => {
      if (value) {
        this.stepper.next();
      }
    });
  }

  nextStep(): void {
    if (this.participationForm.valid) {
      this.stepper.next();
    } else {
      alert('Please fill out all the fields.');
    }
  }

  updateParticipation(): void {
    const statusControl = this.participationForm.get('status');
    if (statusControl) { // Check if statusControl is not null
      const status: string = statusControl.value;

      // Create an updated participation object based on form values
      let updatedParticipation: Participation = {
        ...this.participationForm.value,
        id_participation: this.data.participation.id_participation
      };

      // Check if status changed to APPROVED
      if (status === 'APPROVED') {
        // Add showtime and notes
        updatedParticipation = {
          ...updatedParticipation,
          showtime: new Date(), // Set showtime as current time
          notes: 'Approved participation' // Set default notes
        };
      }


      this.participationService.updateParticipation(updatedParticipation).subscribe({
        next: () => {
          alert('Participation updated successfully.');
          this.dialogRef.close(true); // Close dialog with a success flag
        },
        error: (error) => {
          console.error('Error updating participation:', error);
          alert('Error updating participation. Please try again.');
        }
      });
    } else {

      console.error('Status control is null.');
    }
  }  
}

