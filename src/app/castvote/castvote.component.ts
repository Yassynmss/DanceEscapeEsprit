import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoteService } from '../Services/vote.service';
import { Router } from '@angular/router';
import { Vote } from '../core/vote';
import { ParticipationService } from '../Services/participation.service';

@Component({
  selector: 'app-castvote',
  templateUrl: './castvote.component.html',
  styleUrls: ['./castvote.component.css']
})
export class CastvoteComponent {
  voteF !: FormGroup;

  constructor(private formBuilder: FormBuilder , private participationService : ParticipationService, private router : Router) {
    this.voteF = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pc: [null, Validators.required]
    });
  }
  
  addVote() {
    if (this.voteF.valid) {
      const { fullName, email, pc } = this.voteF.value;
      this.participationService.castVote(fullName, email, pc).subscribe({
        next: (value) => {
          alert('Vote submitted successfully!');
          // Optionally, you can reset the form after successful submission
          this.voteF.reset();
        },
        error: (error) => {
          console.error('Error submitting vote:', error);
          alert('An error occurred while submitting the vote. Please try again.');
        }
      });
    } else {
      alert('Please fill out all the fields.');
    }
  }
  


}
