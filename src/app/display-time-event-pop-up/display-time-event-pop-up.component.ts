import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SearchResultDialogEventComponent } from '../search-result-dialog-event/search-result-dialog-event.component';
import { EventService } from '../Services/event.service';


@Component({
  selector: 'app-display-time-event-pop-up',
  templateUrl: './display-time-event-pop-up.component.html',
  styleUrls: ['./display-time-event-pop-up.component.css']
})
export class DisplayTimeEventPopUpComponent implements OnInit {

  timeRemaining!: string;

  constructor(
    public dialogRef: MatDialogRef<DisplayTimeEventPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.timeRemaining = this.data.timeRemaining;
  }

  onNoClickTimeRemaining(): void {
    this.dialogRef.close();
  }

  

}
