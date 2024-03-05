import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vote } from '../core/vote';
import { VoteService } from '../Services/vote.service';

@Component({
  selector: 'app-updatevote',
  templateUrl: './updatevote.component.html',
  styleUrls: ['./updatevote.component.css']
})
export class UpdatevoteComponent implements OnInit {
  voteForm!: FormGroup;
  vote!: Vote;

  constructor(
    private formBuilder: FormBuilder,
    private voteService: VoteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.voteForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      votingPeriodStart: ['', Validators.required],
      votingPeriodEnd: ['', Validators.required],
      voteConfirmationCode: ['', Validators.required]
    });

    const id = this.route.snapshot.params['id'];
    this.voteService.getVoteById(id).subscribe(vote => {
      this.vote = vote;
      this.voteForm.patchValue({
        fullName: vote.fullName,
        email: vote.email,
        votingPeriodStart: this.formatDate(vote.votingPeriodStart),
        votingPeriodEnd: this.formatDate(vote.votingPeriodEnd),
        voteConfirmationCode: vote.voteConfirmationCode
      });
    });
  }

  updateVote(): void {
    if (this.voteForm.valid) {
      const updatedVote: Vote = { ...this.vote, ...this.voteForm.value };
      this.voteService.updateVote(updatedVote).subscribe(() => {
        this.router.navigate(['/votes']);
      });
    } else {
      alert('Please fill out all the fields.');
    }
  }

  formatDate(date: Date): string {
    return date ? new Date(date).toISOString().slice(0, 16) : '';
  }
}
