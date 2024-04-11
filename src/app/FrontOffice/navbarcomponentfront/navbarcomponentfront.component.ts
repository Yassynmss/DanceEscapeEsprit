// NavbarcomponentfrontComponent

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbarcomponentfront',
  templateUrl: './navbarcomponentfront.component.html',
  styleUrls: ['./navbarcomponentfront.component.css']
})
export class NavbarcomponentfrontComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn(); // Vérifiez si l'utilisateur est connecté
    if (this.isLoggedIn) {
      this.checkUserRole(); // Vérifiez le rôle de l'utilisateur s'il est connecté
    }
  }

  logout(): void {
    this.authService.logout(); // Déconnectez l'utilisateur
    this.isLoggedIn = false; // Mettez à jour le statut de connexion
    this.isAdmin = false; // Réinitialisez le statut isAdmin
  }

  checkUserRole(): void {
    const userEmail = this.authService.getLoggedInUserEmail(); // Obtenez l'e-mail de l'utilisateur connecté
    if (userEmail) {
      // Exemple de vérification du rôle à partir de l'e-mail (vous devrez remplacer cela par votre logique)
      this.authService.getUserRoleByEmail(userEmail).subscribe(role => {
        if (role === 'ADMIN') {
          this.isAdmin = true; // Mettez à jour le statut isAdmin si l'utilisateur est un administrateur
        }
      });
    }
  }
}
