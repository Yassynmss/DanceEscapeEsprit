import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DancersGroup } from 'src/app/models/DancersGroup';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-dg',
  templateUrl: './create-dg.component.html',
  styleUrls: ['./create-dg.component.css']
})
export class CreateDGComponent {
  groupName!: string;
  groupDescription?: string;
  membersArray: FormControl[] = [new FormControl('', Validators.required)]; 
  memberControls: FormControl[] = []; 
  users: any[] = []; 
  availableUsers: any[] = []; 
  selectedMembers: any[] = []; 
  createGroupForm!: FormGroup;

  constructor(private http: HttpClient , private userService : UserService , private modalService: NgbModal, private fb: FormBuilder ) {
    this.createGroupForm = this.fb.group({
      groupName: ['', [Validators.required, this.groupNameValidator]],
      groupDescription: ['', [Validators.required, Validators.maxLength(150)]],
      
    }); 
  }

  ngOnInit(): void {
    this.fetchDancerUsers();
  }

  fetchDancerUsers(): void {
    this.userService.getDancerUsers().subscribe(
      (data) => {
        this.users = data;
        this.updateAvailableUsers();
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs DANCER : ', error);
      }
    );
  }

 

  createGroup(): void {
    const url = 'http://localhost:8080/DancersGroup/create'; 
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    const selectedMembersNames = this.memberControls.map(control => {
      const selectedIndex = control.value;
      return this.availableUsers[selectedIndex].firstname + ' ' + this.availableUsers[selectedIndex].lastname;
    });

    const membersString = selectedMembersNames.join(',');
  
    const body = {
      groupName: this.groupName,
      groupDescription: this.groupDescription,
      members: membersString 
    };
  
    this.http.post(url, body, { headers }).subscribe(
      response => {
        console.log('Groupe créé avec succès !');
        this.openSuccessModal();
      },
      error => {
        console.error('Une erreur s\'est produite lors de la création du groupe : ', error);
        this.openErrorModal();
      }
    );
  }
  openSuccessModal() {
    const modalRef = this.modalService.open(SuccessModalComponent);
    modalRef.componentInstance.message = 'Le groupe a été ajouté avec succès.';
  }

  openErrorModal() {
    const modalRef = this.modalService.open(ErrorModalComponent);
    modalRef.componentInstance.message = 'Une erreur s\'est produite lors de la ajout du groupe.';
  }
  
  addMember(): void {
    // Sauvegarder les membres précédemment sélectionnés
    const selectedMemberIndex = this.memberControls.map(control => control.value);
    const selectedMembers = selectedMemberIndex
      .filter(index => typeof index === 'number' && index >= 0 && index < this.availableUsers.length)
      .map(index => this.availableUsers[index]);
    
    if (this.selectedMembers.some(member => selectedMembers.includes(member))) {
      // Afficher un message d'erreur
      console.error('Cet utilisateur a déjà été ajouté à un groupe.');
      return;
    }
  
    // Sauvegarder les membres précédemment sélectionnés
    this.selectedMembers = selectedMembers;
    const newMemberControl = new FormControl('', Validators.required);
    this.memberControls.push(newMemberControl);
    this.updateAvailableUsers();
  }
  groupNameValidator(control: AbstractControl) {
    const groupName = control.value;
    if (!groupName || groupName.trim() === '') {
      return { required: true }; // Retourne une erreur si le champ est vide
    }
    return null; // Retourne null si le champ est valide
  }


  
  
  
  removeMember(index: number): void {
    const removedUserIndex = this.memberControls[index].value;
    const removedUser = this.availableUsers[removedUserIndex];
    this.membersArray.splice(index, 1);
    this.memberControls.splice(index, 1); 
    if (removedUser) {
      this.availableUsers.push(removedUser);
    }
  }
  
  updateAvailableUsers(): void {
    this.availableUsers = this.users.filter(user =>
      !this.memberControls.map(control => control.value).includes(user) && !this.selectedMembers.includes(user)
    );
  }
}
@Component({
  selector: 'success-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Succès</h4>
    </div>
    <div class="modal-body">
      {{ message }}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="modal.close()">Fermer</button>
    </div>
  `
})
export class SuccessModalComponent {
  message?: string;
  constructor(public modal: NgbActiveModal) { }
}

@Component({
  selector: 'error-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Erreur</h4>
    </div>
    <div class="modal-body">
      {{ message }}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="modal.close()">Fermer</button>
    </div>
  `
})
export class ErrorModalComponent {
  message?: string;
  constructor(public modal: NgbActiveModal) { }
}
