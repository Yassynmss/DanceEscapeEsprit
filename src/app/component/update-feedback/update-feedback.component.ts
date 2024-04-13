import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.css']
})
export class UpdateFeedbackComponent {
  validateForm!: FormGroup;
  id_resandfeed: any = this.activatedRoute.snapshot.params['id_resandfeed']

  constructor(private feedbackservice: FeedbackService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.id_resandfeed)
    this.validateForm = this.fb.group({
      technique_score: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      creative_score: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      presentation_score: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      finale_score: [null, [Validators.min(0), Validators.max(10)]],
      semifinal_score: [null, [Validators.min(0), Validators.max(10)]],
      feedback: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(250)]],
      state: ['', Validators.required]
    })
    this.getFeedbackById();
  }

  getFeedbackById() {
    this.feedbackservice.getFeedbackById(this.id_resandfeed).subscribe((res) => {
      console.log(res);
      this.validateForm.patchValue(res);
    })
  }

  updateFeedback() {
    this.feedbackservice.updateFeedback(this.id_resandfeed, this.validateForm.value).subscribe(res => {
      console.log(res)
    })
  }


}
