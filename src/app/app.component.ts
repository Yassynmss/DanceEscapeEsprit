
import { SwUpdate } from '@angular/service-worker';
import { MatDialog } from '@angular/material/dialog';
import { CastvoteComponent } from './castvote/castvote.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'springangular';
  equipmentForm!: FormGroup;
  constructor(private swUpdate: SwUpdate , private _dialog: MatDialog,private formBuilder: FormBuilder) {
    this.checkForNewVersion();
    
    // Check for new version every minute
    setInterval(() => this.checkForNewVersion(), 60 * 1000);
}
ngOnInit(): void {
  this.equipmentForm = this.formBuilder.group({
   
    name_equipment: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    quantity: ['', [Validators.required]],
    etat: ['', [Validators.required]]
  });
}
checkForNewVersion = async () => {
  try {
    // Check if Service Worker is supported by the Browser
    if (this.swUpdate.isEnabled) {
      // Check if new version is available
      const isNewVersion = await this.swUpdate.checkForUpdate();
      if (isNewVersion) {
        // Check if new version is activated
        const isNewVersionActivated = await this.swUpdate.activateUpdate();

        // Reload the application with new version if new version is activated
        if (isNewVersionActivated) window.location.reload();
      }
    }
  } catch (error) {
    console.log(
      `Service Worker - Error when checking for new version of the application: `,
      error
    );
    window.location.reload();
  }
};
openForm(){
  this._dialog.open(CastvoteComponent);
}
}
