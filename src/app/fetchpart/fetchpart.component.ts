import { Component } from '@angular/core';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetchpart',
  templateUrl: './fetchpart.component.html',
  styleUrls: ['./fetchpart.component.css']
})
export class FetchpartComponent {
Participations : Participation[]=[];
constructor(private participationService: ParticipationService, private router: Router) {}
ngOnInit(): void {
  this.loadParticipations();

}
loadParticipations() {
  this.participationService.fetchParticipationList().subscribe(participations => {
    this.Participations = participations;
  });
}
editParticipation(id: number): void {
  this.router.navigate(['/admin/edit-participation', id]);

}
deleteParticipationById(id: number): void {
  this.participationService.deleteParticipationById(id).subscribe( ()=> {this.loadParticipations(); });
}
}
