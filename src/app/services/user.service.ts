import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
/*
*  private apiUrl = 'http://localhost:8084/api/user'; 

  constructor(private http: HttpClient) { }


  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl+"/register", user);
  }
  
  searchUsers(firstName: string, lastName: string): Observable<User[]> {
    console.log('Searching for:', firstName, lastName);
    return this.http.get<User[]>(`${this.apiUrl}/search/${firstName}/${lastName}`);
  }
  
  

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.userId}`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
  // Méthode pour vérifier si un email existe déjà dans la base de données
  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${email}`);
  }*/

}
