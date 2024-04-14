import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-edit-participation',
  templateUrl: './edit-participation.component.html',
  styleUrls: ['./edit-participation.component.css']
})
export class EditParticipationComponent {
  participationForm!: FormGroup;
  participation!: Participation;

  constructor(
    private formBuilder: FormBuilder,
    private participationService: ParticipationService,
    public dialogRef: MatDialogRef<EditParticipationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.participationForm = this.formBuilder.group({
      showtime: ['', Validators.required],
      participantCode: ['', Validators.required],
      totalVotes: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.participationForm.patchValue(this.data.participation);
  }

  updateParticipation(): void {
    if (this.participationForm.valid) {
      const updatedParticipation: Participation = {
        id_participation: this.data.participation.id_participation, // Include the participation ID
        ...this.participationForm.value
      };
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
      alert('Please fill out all the fields.');
    }
  }
  
}
