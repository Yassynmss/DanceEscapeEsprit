import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoteService } from '../Services/vote.service';
import { Vote } from '../core/vote';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vote',
  templateUrl: './add-vote.component.html',
  styleUrls: ['./add-vote.component.css']
})
export class AddVoteComponent {
voteForm!: FormGroup;

constructor(private formBuilder: FormBuilder , private voteService : VoteService, private router : Router) {
  this.voteForm = this.formBuilder.group({
    fullName: [null, Validators.required], 
    email: [null, [Validators.required, Validators.email]], 
    votingPeriodStart: [null, Validators.required], 
    votingPeriodEnd: [null, Validators.required], 
    voteConfirmationCode: [null, Validators.required] 
  });
}

addVote(){
  if (this.voteForm.valid){
    const newVote : Vote = this.voteForm.value as Vote;
    this.voteService.addVote(newVote).subscribe(()=>
    {
      this.router.navigate(['/votes']);
    });
  } else {
    alert("Please fill out all the fields.");
  }
}
}
