import { Component } from '@angular/core';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-partdetails',
  templateUrl: './partdetails.component.html',
  styleUrls: ['./partdetails.component.css']
})
export class PartdetailsComponent {
  participations: Participation[] = [];

///////////////////

userID= 1;

//////////////////

constructor(private participationService: ParticipationService) { }
private subscription: Subscription | undefined;

ngOnInit(): void {
  this.fetchParticipations();
}

fetchParticipations(): void {
  this.subscription = this.participationService.getParticipationsByUserId(this.userID)
    .subscribe({
      next: (participations) => {
        this.participations = participations;
        console.log('Fetched participations:', this.participations);
      },
      error: (error) => {
        console.error('Error fetching participations:', error);
      }
    });
}

}