import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    // Obtenir les rôles de l'utilisateur
    return this.authService.getUserRoles().pipe(
      map((userRoles: string[]) => {
        // Si l'utilisateur est un ADMIN, rediriger loin de la route '/' (page d'accueil)
        if(userRoles.includes('ADMIN')) {
          this.router.navigateByUrl('/admin');
          return false;
        }
        
        // Si l'utilisateur est un EVALUATOR, rediriger loin de la route '/admin'
        if(userRoles.includes('EVALUATOR')) {
          this.router.navigateByUrl('/front');
          return false;
        }

        // Autoriser l'accès aux autres routes
        return true;
      })
    );
  }
  
}
