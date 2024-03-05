import { Component } from '@angular/core';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-participation',
  templateUrl: './add-participation.component.html',
  styleUrls: ['./add-participation.component.css']
})
export class AddParticipationComponent {
  participationForm! : FormGroup;
  showtime!: Date; 

  constructor(private formBuilder: FormBuilder , private participationService : ParticipationService) {
    this.participationForm =this.formBuilder.group({
      showtime: ['', Validators.required],
      participantCode: ['', Validators.required],
      totalVotes: ['', Validators.required]
    });
  }
  addPart(){
    if (this.participationForm.valid){
      const newParticipation : Participation = this.participationForm.value as Participation;
      this.participationService.addParticipation(newParticipation).subscribe(()=>
      {
        this.participationForm.reset();
        
      });
      alert('Participation Added Successfulyy.');
    } else {
      alert("Please fill out all the fields.");
    }
  }
  
}
