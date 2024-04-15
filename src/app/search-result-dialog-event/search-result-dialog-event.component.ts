import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-result-dialog-event',
  templateUrl: './search-result-dialog-event.component.html',
  styleUrls: ['./search-result-dialog-event.component.css']
})
export class SearchResultDialogEventComponent {

  constructor(public dialogRef: MatDialogRef<SearchResultDialogEventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
