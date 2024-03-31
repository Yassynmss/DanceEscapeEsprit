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
    this.isLoggedIn = this.authService.isLoggedIn(); // Vérifiez si l'utilisateur est connecté au chargement de la navbar
  //  this.checkAdminRole();
  }

  logout(): void {
    this.authService.logout(); // Déconnectez l'utilisateur
    this.isLoggedIn = false; // Mettez à jour le statut de connexion
  }
  // Méthode pour vérifier si l'utilisateur est administrateur
 // checkAdminRole(): void {
  //  const userEmail = 'yassinemessoaudi22@gmail.com'; // Remplacez ceci par l'e-mail de l'utilisateur actuel
 //   this.authService.isAdmin(userEmail).subscribe(isAdmin => {
 //     this.isAdmin = isAdmin; // Met à jour le statut isAdmin avec la valeur renvoyée par le service
//    });
 // }
}
