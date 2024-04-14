import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participation } from '../core/particpation';

@Injectable({
  providedIn: 'root'
})

export class ParticipationService {
  private baseUrl : string='http://localhost:8082/participations';
  
  constructor(private http : HttpClient) { }

  fetchParticipationList(): Observable<Participation[]> {
    return this.http.get<Participation[]>(this.baseUrl + '/fetchParticipationList');
  }
  addParticipationAndAffectUser(participation: Participation, eventId: number, userId: number): Observable<Participation> {
    return this.http.post<Participation>(`${this.baseUrl}/saveParticipationAndAffect/${eventId}/${userId}`, participation);
  } 
  updateParticipation(participation: Participation): Observable<Participation> {
    return this.http.put<Participation>(this.baseUrl+`/updateParticipation/${participation.id_participation}`, participation);
  }
  
  getParticipationById(id: number): Observable<Participation> {
    return this.http.get<Participation>(`${this.baseUrl}/${id}`);
  }

  deleteParticipationById(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/deleteParticipationById/${id}`);
  }
  castVote(fullName: string, email: string, participantCode: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/castvote/${fullName}/${email}/${participantCode}`, {});
  }
 
  getParticipationsByEventId(eventId: number): Observable<Participation[]> {
    return this.http.get<Participation[]>(`${this.baseUrl}/getParticipationsByEventId/${eventId}`);
  }

}
