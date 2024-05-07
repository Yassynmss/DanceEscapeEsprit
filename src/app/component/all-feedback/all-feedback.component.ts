import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';
import * as XLSX from 'xlsx';
import jsPDF  from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSourcePaginator } from '@angular/material/table';



@Component({
  selector: 'app-all-feedback',
  templateUrl: './all-feedback.component.html',
  styleUrls: ['./all-feedback.component.css']
})
export class AllFeedbackComponent {
  likeCount: number = 0; // Déclaration et initialisation de la propriété likeCount
  top10Feedbacks: any[]=[];
  feedbacks: any[] = [];
  searchForm: FormGroup;
  ExcelData: any[] = []; // Déclaration de la propriété ExcelData
  currentPage: number =1; 
  top3Feedbacks: any[] = [];



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
    this.loadTop3Feedbacks();
    this.loadTop10Feedbacks();

  }

  getAllFeedbacks() {
    this.feedbackService.getAllFeedbacks().subscribe(res => {
      console.log(res);
      this.feedbacks = res;
    });
  }
  loadTop3Feedbacks(): void {
    this.feedbackService.getTop3Feedbacks().subscribe(
      feedbacks => {
        this.feedbacks = feedbacks;  // Assign to feedbacks array
      },
      error => {
        console.error('Error fetching top 3 feedbacks:', error);
      }
    );
  }
  loadTop10Feedbacks(): void {
    this.feedbackService.getTop10Feedbacks().subscribe(
      feedbacks => {
      this.feedbacks = feedbacks;
      
    },
    error => {
      console.error('Error fetching top 10 feedbacks:', error);
    }
  );
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

ReadExcel(event: any){
  let file = event.target.files [0];
  let fileReader = new FileReader();
  fileReader.readAsBinaryString(file);
  fileReader.onload=(e)=>{
    var workbook =XLSX.read(fileReader.result,{type:'binary'});
    var sheetNames=workbook.SheetNames;
    this.ExcelData=XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])
    console.log(this.ExcelData)
  }

}
fileName ="Result.xlsx"
excelExport(){
 let data =document.getElementById("table-data");
 const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(data)
 const wb:XLSX.WorkBook=XLSX.utils.book_new();

XLSX.utils.book_append_sheet(wb,ws,"Sheet1")
XLSX.writeFile(wb,this.fileName)

}
generatePDF(){

  var doc = new jsPDF();  
  autoTable ( doc , {html:"#table-data"} );
  doc .save("Result");
}




}


