import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-post-feedback',
  templateUrl: './post-feedback.component.html',
  styleUrls: ['./post-feedback.component.css']
})
export class PostFeedbackComponent {
  validateForm!: FormGroup;
  finale_score: number | null = null;

  constructor(private feedbackService: FeedbackService, private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      technique_score: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      creative_score: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      presentation_score: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      semifinal_score: [null, [Validators.min(0), Validators.max(10)]], // Optional semifinal score
      feedback: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(250)]],
      state: ['', Validators.required]
    });

    this.validateForm.valueChanges.subscribe(() => {
      this.calculateScores();
    });
  }

  loading: boolean = false;

  addFeedback() {
    // Calculate scores before adding feedback
    this.calculateScores();
    console.log('calculateScores() function is triggered.');

    // Set loading to true before making the HTTP request
    this.loading = true;
  
    // Include final_score in the data to be sent to the service
    const feedbackData = {
      ...this.validateForm.value,
      finale_score: this.finale_score
    };
  
    this.feedbackService.postFeedback(feedbackData).subscribe(
      (res) => {
        console.log('Response:', res);
      },
      (error) => {
        console.error('Error adding feedback:', error);
      }
    ).add(() => {
      // Set loading to false after the HTTP request is complete
      this.loading = false;
    });
  }
  calculateScores() {
    const techniqueScore = this.validateForm.get('technique_score')?.value || 0;
    const creativeScore = this.validateForm.get('creative_score')?.value || 0;
    const presentationScore = this.validateForm.get('presentation_score')?.value || 0;
    const semifinalScore = this.validateForm.get('semifinal_score')?.value || 0;
  
    // Check if semifinal score is provided (not null or undefined)
    const includeSemifinal = semifinalScore !== null && semifinalScore !== undefined;
  
    let finale_score;
    if (includeSemifinal) {
      // Include semifinal score in the average if present
      finale_score = (techniqueScore + creativeScore + presentationScore + semifinalScore) / 4;
    } else {
      // Fall back to original calculation without semifinal score
      finale_score = (techniqueScore + creativeScore + presentationScore) / 3;
    }
  
    this.finale_score = Math.round(finale_score);
    console.log('Final Score:', this.finale_score);
  }
  
}