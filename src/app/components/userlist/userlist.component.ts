import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
 /* firstname: string = '';
  lastname: string = '';
 
  users: User[] = []; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  searchUsers() {
    // Vérifier si les champs prénom et nom sont renseignés
    if (this.firstname && this.lastname) {
      // Appeler le service pour rechercher les utilisateurs
      this.userService.searchUsers(this.firstname, this.lastname).subscribe(users => {
        this.users = users;
      });
    } else {
      alert('Please enter both first name and last name');
    }
  }*/
}
