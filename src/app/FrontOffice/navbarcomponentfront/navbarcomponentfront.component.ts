
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
  isEvaluator: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn(); // Vérifiez si l'utilisateur est connecté
    if (this.isLoggedIn) {
      this.checkUserRoles(); // Vérifiez les rôles de l'utilisateur s'il est connecté
    }
  }

  logout(): void {
    this.authService.logout(); // Déconnectez l'utilisateur
    this.isLoggedIn = false; // Mettez à jour le statut de connexion
    this.isAdmin = false; // Réinitialisez le statut isAdmin
    this.isEvaluator = false; // Réinitialisez le statut isEvaluator
  }

  checkUserRoles(): void {
    const userEmail = this.authService.getLoggedInUserEmail(); // Obtenez l'e-mail de l'utilisateur connecté
    if (userEmail) {
      // Obtenez les rôles de l'utilisateur
      this.authService.getUserRoleByEmail(userEmail).subscribe(roles => {
        // Vérifiez si roles est un tableau d'objets ou une chaîne de caractères
        if (Array.isArray(roles)) {
          // Si c'est un tableau d'objets, itérez dessus pour vérifier les rôles
          roles.forEach(role => {
            if (role.name === 'ADMIN') {
              this.isAdmin = true;
            }
            if (role.name === 'EVALUATOR') {
              this.isEvaluator = true;
            }
          });
        } else if (typeof roles === 'string') {
          // Si c'est une chaîne de caractères, vérifiez directement les rôles
          if (roles === 'ADMIN') {
            this.isAdmin = true;
          }
          if (roles === 'EVALUATOR') {
            this.isEvaluator = true;
          }
        }
      });
    }
  }

}
