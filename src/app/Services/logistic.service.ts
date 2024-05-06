import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logistic } from '../core/models/logistic/logistic';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogisticService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) { }

  addLogistic(logistic: Logistic, id_event: number): Observable<Logistic> {
    const url = `${this.apiUrl}/addLogistic/${id_event}`; // Utilisation de guillemets inversés pour interpoler la variable
    return this.http.post<Logistic>(url, logistic);
  }

  getAllLogistics(): Observable<Logistic[]> {
    const url = `${this.apiUrl}/getAllLogistics`; // Utilisation de guillemets inversés pour interpoler la variable
    return this.http.get<Logistic[]>(url);
  }

  getLogisticByEvent(id_event: number): Observable<Logistic> {
    const url = `${this.apiUrl}/getLogisticByEvent/${id_event}`; // Utilisation de guillemets inversés pour interpoler la variable
    return this.http.get<Logistic>(url);
  }

  deleteLogistic(id_logistic: number): Observable<string> {
    const url = `${this.apiUrl}/deleteLogistic/${id_logistic}`; // Utilisation de guillemets inversés pour interpoler la variable
    return this.http.delete<string>(url);
  }

  getLogisticById(id_logistic: number): Observable<Logistic> {
    const url = `${this.apiUrl}/getLogisticById/${id_logistic}`; // Utilisation de guillemets inversés pour interpoler la variable
    return this.http.get<Logistic>(url);
  }
}
