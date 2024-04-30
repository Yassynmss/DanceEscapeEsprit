

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbarcomponentfront',
  templateUrl: './navbarcomponentfront.component.html',
  styleUrls: ['./navbarcomponentfront.component.css']
})
export class NavbarcomponentfrontComponent implements OnInit {
  isLoggedIn: boolean = false;
  isDancer: boolean = false; 
  isAdmin: boolean = false;
  constructor(private authService: AuthService , private userService : UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn(); // Vérifiez si l'utilisateur est connecté
    if (this.isLoggedIn) {
      this.checkIfDancerIsLoggedIn(); // Vérifiez si l'utilisateur est connecté en tant que danseur
    }
  }

  checkIfDancerIsLoggedIn(): void {
    this.authService.getLoggedInUser().subscribe(
      (user: User | undefined) => {
        // Vérifiez si l'utilisateur est défini et s'il a le rôle de "DANCER"
        if (user && user.roles) {
          this.isDancer = user.roles.some(role => role.name === 'DANCER');
        } else {
          this.isDancer = false; // Si l'utilisateur ou ses rôles sont indéfinis, définissez isDancer à false
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'utilisateur connecté : ', error);
      }
    );
  }
  

  logout(): void {
    this.authService.logout(); // Déconnectez l'utilisateur
    this.isLoggedIn = false; // Mettez à jour le statut de connexion
    this.isDancer = false; // Réinitialisez le statut isDancer
    this.isAdmin = false;
  }
}

