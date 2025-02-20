import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Importez NgbModal
import { Route, Router } from '@angular/router';
import { ErrorModalComponent, SuccessModalComponent } from '../create-dg/create-dg.component';

@Component({
  selector: 'app-delete-dg',
  templateUrl: './delete-dg.component.html',
  styleUrls: ['./delete-dg.component.css']
})
export class DeleteDGComponent implements OnInit {
  groupNames: string[] = [];
  selectedGroupName: string = '';

  constructor(private http: HttpClient, private modalService: NgbModal) { } // Injectez NgbModal

  ngOnInit(): void {
    this.fetchGroupNames();
  }

  fetchGroupNames(): void {
    const url = 'http://localhost:8080/DancersGroup/groupNames';
    this.http.get<string[]>(url).subscribe(
      (data) => {
        this.groupNames = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des noms de groupe : ', error);
      }
    );
  }

  deleteGroup(): void {
    const url = `http://localhost:8080/DancersGroup/delete/${this.selectedGroupName}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.delete(url, { headers }).subscribe(
      response => {
        console.log('Groupe supprimé avec succès !');
        this.openSuccessModal();
        // Rafraîchir la liste des noms de groupe après la suppression
        this.fetchGroupNames();
      },
      error => {
        console.error('Une erreur s\'est produite lors de la suppression du groupe : ', error);
        this.openErrorModal();
      }
    );
  }

  openSuccessModal() {
    const modalRef = this.modalService.open(SuccessModalComponent);
    modalRef.componentInstance.message = 'Le groupe a été supprimé avec succès.';
  }

  openErrorModal() {
    const modalRef = this.modalService.open(ErrorModalComponent);
    modalRef.componentInstance.message = 'Une erreur s\'est produite lors de la suppression du groupe.';
  }
}
