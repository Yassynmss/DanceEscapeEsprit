import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-mat-dialog-module',
  templateUrl: './mat-dialog-module.component.html',
  styleUrls: ['./mat-dialog-module.component.css']
})
export class MatDialogModuleComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  
  get title(): string {
    return this.data.success ? 'Success' : 'Error';
  }

  get message(): string {
    return this.data.message;
  }

  closeDialog(): void {
    // Fermer la boîte de dialogue
  }
}
