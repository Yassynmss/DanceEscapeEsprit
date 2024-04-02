import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CastvoteComponent } from './castvote/castvote.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springangular';
  
constructor(private _dialog: MatDialog){}

openForm(){
  this._dialog.open(CastvoteComponent);
}
}
