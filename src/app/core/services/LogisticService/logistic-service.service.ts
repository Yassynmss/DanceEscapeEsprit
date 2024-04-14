import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logistic } from '../../models/logistic/logistic';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogisticServiceService {

  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getLogistics(): Observable<Logistic[]> {
    return this.http.get<Logistic[]>(`${this.apiUrl}/getAllLogistics`);
  }

  getLogisticById(id_logistic:any): Observable<Logistic> {
    return this.http.get<Logistic>(`${this.apiUrl}/getLogisticById/${id_logistic}`);
  }
}
