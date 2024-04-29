import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-one-dg',
  templateUrl: './one-dg.component.html',
  styleUrls: ['./one-dg.component.css']
})
export class OneDGComponent {
  groupName?: string;
  dancersGroup: any;

  constructor(private http: HttpClient) { }

  getGroupById(): void {
    const url = `http://localhost:8080/DancersGroup/getDG/${this.groupName}`;

    this.http.get(url).subscribe(
      (response: any) => {
        this.dancersGroup = response;
        console.log('Groupe récupéré avec succès !', this.dancersGroup);
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du groupe : ', error);
      }
    );
  }
}
