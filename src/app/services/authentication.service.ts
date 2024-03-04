import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'http://localhost:8084/api/user';

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, { email, password }).pipe(
      map(response => {
        const roles = response.roles; // Accessing 'roles' directly from the response
        return { ...response, roles }; // Return the role along with the response
      })
    );
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  getUserRole(userId: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/role/${userId}`);
  }
}
