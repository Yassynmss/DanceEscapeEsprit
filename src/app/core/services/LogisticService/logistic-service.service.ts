import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logistic } from '../../models/logistic/logistic';

@Injectable({
  providedIn: 'root'
})
export class LogisticService {
  private apiUrl = 'http://localhost:8081/logistics';

  constructor(private http: HttpClient) { }

  addLogistic(logistic: Logistic, id_event: number): Observable<Logistic> {
    return this.http.post<Logistic>(`${this.apiUrl}/add/${id_event}`, logistic);
  }

  getAllLogistics(): Observable<Logistic[]> {
    return this.http.get<Logistic[]>(`${this.apiUrl}/getAllLogistics`);
  }

  getLogisticByEvent(id_event: number): Observable<Logistic> {
    return this.http.get<Logistic>(`${this.apiUrl}/event/${id_event}`);
  }

  deleteLogistic(id_logistic: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${id_logistic}`);
  }

  getLogisticById(id_logistic: number): Observable<Logistic> {
    return this.http.get<Logistic>(`${this.apiUrl}/${id_logistic}`);
  }
}
