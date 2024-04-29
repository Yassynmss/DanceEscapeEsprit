import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service'; // Importe le service UserService

@Component({
  selector: 'app-update-dg',
  templateUrl: './update-dg.component.html',
  styleUrls: ['./update-dg.component.css']
})
export class UpdateDGComponent implements OnInit {
  groupNameToUpdate?: string;
  groupName?: string;
  groupDescription?: string;
  members: FormControl[] = [new FormControl('', Validators.required)];
  users: any[] = []; // Stocke les utilisateurs DANCER récupérés du service

  constructor(private http: HttpClient, private modalService: NgbModal, private userService: UserService) { }

  ngOnInit(): void {
    this.fetchDancerUsers(); // Appelle la méthode pour récupérer les utilisateurs DANCER
  }

  fetchDancerUsers(): void {
    this.userService.getDancerUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs DANCER : ', error);
      }
    );
  }

  updateGroup(): void {
    const url = 'http://localhost:8080/DancersGroup/updategroup/' + this.groupNameToUpdate;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const selectedMembersNames = this.members.map(control => {
      const selectedIndex = control.value;
      return this.users[selectedIndex].firstname + ' ' + this.users[selectedIndex].lastname;
    });

    const membersString = selectedMembersNames.join(',');

    const body = {
      groupName: this.groupName,
      groupDescription: this.groupDescription,
      members: membersString
    };

    this.http.put(url, body, { headers }).subscribe(
      response => {
        console.log('Groupe mis à jour avec succès !');
      },
      error => {
        console.error('Une erreur s\'est produite lors de la mise à jour du groupe : ', error);
      }
    );
  }

  addMember(): void {
    const newMemberControl = new FormControl('', Validators.required);
    this.members.push(newMemberControl);
  }

  removeMember(index: number): void {
    this.members.splice(index, 1);
  }

  // Méthode pour ouvrir la pop-up de confirmation
  openConfirmationModal(content: any): void {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        if (result === 'confirm') {
          this.updateGroup();
        }
      },
      (reason) => {
        console.log(`Dismissed with reason: ${reason}`);
      }
    );
  }
}
