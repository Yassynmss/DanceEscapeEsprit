import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { MfaVerificationRequest } from '../shared/mfa-verification-request.model';
import { MfaVerificationResponse } from '../shared/mfa-verification-response.modal';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';
  constructor(private authenticationClient: AuthenticationService, private router: Router, private Http: HttpClient) { }

  public login(payload: MfaVerificationResponse): void {
    if(payload.tokenValid && !payload.mfaRequired){
      localStorage.clear();
      localStorage.setItem(this.tokenKey, payload.jwt);
    }
  }

  public navidateToHome(): void {
    this.router.navigate(['/']);
  }

  public register(payload: string): void {
    this.authenticationClient
      .register(payload)
      .subscribe((mfaQR:any) => {
        let parsed = JSON.parse(mfaQR);
        //localStorage.setItem(this.tokenKey, token);
        this.router.navigate(['/qr', {'qrCode': parsed.qrCode, 'qrCodeKey': parsed.mfaCode}]);
      });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  forgotPassword(email: string): Observable<any> {
    const url = `http://localhost:8080/forgot-password?email=${encodeURIComponent(email)}`;
    return this.Http.post(url, {});
  }
  resetPassword(token: string, newPassword: string): Observable<any> {
    const url = 'http://localhost:8080/reset-password';

    // Créer les paramètres de la requête
    let params = new HttpParams();
    params = params.append('token', token);
    params = params.append('newPassword', newPassword);

    // Envoyer la requête avec les paramètres dans l'URL
    return this.Http.post<any>(url, {}, { params });
  }
}
