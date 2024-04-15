
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sidebarback',
  templateUrl: './sidebarback.component.html',
  styleUrls: ['./sidebarback.component.css']
})


export class SidebarbackComponent implements OnInit {
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn(); // Vérifiez si l'utilisateur est connecté
    if (this.isLoggedIn) {
    }
  }

  constructor(private authService: AuthService , private router: Router) { }
  logout(): void {
    this.authService.logout(); // Déconnectez l'utilisateur
    this.isLoggedIn = false; // Mettez à jour le statut de connexion
  }
  showparticipation()
  {
    this.router.navigate(['/participations' ]);

  }

}



