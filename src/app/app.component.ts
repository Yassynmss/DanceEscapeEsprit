import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatDialog } from '@angular/material/dialog';
import { CastvoteComponent } from './castvote/castvote.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springangular';
  constructor(private swUpdate: SwUpdate , private _dialog: MatDialog) {
    this.checkForNewVersion();
    
    // Check for new version every minute
    setInterval(() => this.checkForNewVersion(), 60 * 1000);
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
