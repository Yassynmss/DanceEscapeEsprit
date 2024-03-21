import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MfaVerificationResponse } from '../shared/mfa-verification-response.modal';

import { MfaVerificationRequest } from '../shared/mfa-verification-request.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor(private http: HttpClient) { }

  /*authenticate(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, { email, password }).pipe(
      map(response => {
        const roles = response.roles; // Accessing 'roles' directly from the response
        return { ...response, roles }; // Return the role along with the response
      })
    );
  }*/

  //register(user: any): Observable<any> {
  //  return this.http.post<any>(`${this.apiUrl}/register`, user);
 // }

  /*getUserRole(userId: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/role/${userId}`);
  }*/
  public login(payload: string): Observable<MfaVerificationResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<MfaVerificationResponse>(
      environment.apiUrl + '/login', payload, httpOptions
    );
  }

  public verifyTotp(payload: MfaVerificationRequest): Observable<MfaVerificationResponse> {
    return this.http.post<MfaVerificationResponse>(
      environment.apiUrl + '/verifyTotp', payload
    );
  }

  public register(
    payload: string
  ): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/register',payload,
      { responseType: 'text' }
    );
  }
}
