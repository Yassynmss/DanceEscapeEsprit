import { Component, OnInit } from '@angular/core';
import { Vote } from '../core/vote';
import { VoteService } from '../Services/vote.service';
import { Participation } from '../core/particpation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
votes : Vote[] = [] ;

constructor(private voteService: VoteService,private router :Router) {}
 
  ngOnInit(): void {
    this.loadVotes();
 }

  loadVotes() {
    this.voteService.fetchVoteList().subscribe(votes => {
    this.votes = votes;
    });
  }
  updateVote(id: number): void {
    this.router.navigate(['/updateVote', id]);
  
  }
  deletVoteById(id: number): void {
    this.voteService.deletVoteById(id).subscribe( ()=> {this.loadVotes(); });
  }
  
}
