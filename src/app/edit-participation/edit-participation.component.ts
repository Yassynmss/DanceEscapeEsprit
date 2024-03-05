import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-participation',
  templateUrl: './edit-participation.component.html',
  styleUrls: ['./edit-participation.component.css']
})
export class EditParticipationComponent {
participationForm!: FormGroup;
participation! : Participation;
constructor(
  private formBuilder: FormBuilder,
  private participationService: ParticipationService,
  private route: ActivatedRoute,
  private router: Router
) {
  this.participationForm = this.formBuilder.group({
    showtime: ['', Validators.required],
    participantCode: ['', Validators.required],
    totalVotes: ['', Validators.required]
  });
}
ngOnInit(): void {
  const id = this.route.snapshot.params['id']; // Assuming you're passing id through route params
  this.participationService.getParticipationById(id).subscribe(participation => {
    this.participation = participation;
    this.participationForm.patchValue({
      showtime: participation.showtime,
      participantCode: participation.participantCode,
      totalVotes: participation.totalVotes
    });
  });
}
updateParticipation(): void {
  if (this.participationForm.valid) {
    const updatedParticipation: Participation = { ...this.participation, ...this.participationForm.value };
    this.participationService.updateParticipation(updatedParticipation).subscribe(() => {
      this.router.navigate(['/list']); // Redirect to participation list after successful update
    });
  } else {
    alert('Please fill out all the fields.');
  }
}
}
