import { Component, OnInit } from '@angular/core';
import { Vote } from '../core/vote';
import { VoteService } from '../Services/vote.service';
import { Participation } from '../core/particpation';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddVoteComponent } from '../add-vote/add-vote.component';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
votes : Vote[] = [] ;

constructor(private voteService: VoteService,private router :Router,private _dialog: MatDialog) {}
 
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
 

  openForm(){
    this._dialog.open(AddVoteComponent);
  }
}
