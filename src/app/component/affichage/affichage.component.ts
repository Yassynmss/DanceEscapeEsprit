import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaginationInstance } from 'ngx-pagination';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent   {
  feedbacks: any[] = [];
  likeCount: number = 0; // Déclaration et initialisation de la propriété likeCount
  searchForm: FormGroup;
  pagedFeedbacks: any[] = [];

  config: PaginationInstance = {
    itemsPerPage: 10,
    currentPage: 1
  };
  
  constructor(private formBuilder: FormBuilder, private feedbackService: FeedbackService) {
  this.searchForm = this.formBuilder.group({
    participationId: [''],
    techniqueScore: [''],
    creativeScore: [''],
    presentationScore: [''],
    finaleScore: [''],
    semifinalScore: [''],
    feedback: [''],
    state: ['']
  });
}
  ngOnInit() {
    this.getAllFeedbacks();

  }
  getAllFeedbacks() {
    
    this.feedbackService.getAllFeedbacks().subscribe(res => {
      console.log(res);
      this.feedbacks = res;
      this.setPage(1);

    });
  }
  likePost(id_resandfeed: any): void {
    this.feedbackService.LikePostt(id_resandfeed).subscribe(
      response => {
        // Traitez la réponse ici si nécessaire
        console.log('Feedback liked successfully');
      },
      error => {
        // Gérez les erreurs ici
        console.error('An error occurred while liking the feedback:', error);
      }
    );
    this.likeCount++; 

  }
  deleteFeedback(id_resandfeed: any) {
    console.log("id from delete method", id_resandfeed)
    this.feedbackService.deleteFeedback(id_resandfeed).subscribe((res) => {
      console.log(res);
    });
  }
  searchFeedbacks() {
    const searchCriteria = this.searchForm.value;
    this.feedbackService.searchFeedbackAndResult(searchCriteria).subscribe(res => {
      console.log(res);
      this.feedbacks = res;
    });
  }
  
  onSubmit() {
    const searchCriteria = this.searchForm.value;
    this.feedbackService.searchFeedbackAndResult(searchCriteria).subscribe(res => {
      console.log(res);
      this.feedbacks = res;
    });
  }
  // Pagination event handler
  pageChanged(pageNumber: number) {
    this.setPage(pageNumber);
  }

  // Update pagedFeedbacks based on current page
  setPage(pageNumber: number) {
    this.config.currentPage = pageNumber;
    const startIndex = (pageNumber - 1) * this.config.itemsPerPage;
    const endIndex = Math.min(startIndex + this.config.itemsPerPage, this.feedbacks.length);
    this.pagedFeedbacks = this.feedbacks.slice(startIndex, endIndex);
  }
  
 

}
