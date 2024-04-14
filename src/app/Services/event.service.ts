import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../core/event';
import { HttpParams } from '@angular/common/http';
import { Time } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseURL = "http://localhost:8081/";

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseURL + "index");
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.baseURL + "createEvent", event);
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(this.baseURL + "get/" + id);
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(this.baseURL + "update", event);
  }

 

 

  deleteEvent(id: number): Observable<void> {
    const url = `${this.baseURL}delete/${id}`;
    return this.http.delete<void>(url);
  }

  findByCriteria(criteria: any): Observable<Event[]> {
    let params = new HttpParams();
    Object.keys(criteria).forEach(key => {
      if (criteria[key] !== null && criteria[key] !== undefined) {
        params = params.append(key, criteria[key]);
      }
    });
    return this.http.get<Event[]>(this.baseURL + "search", { params: params });
  }

  generateSchedule(eventId: number, startTime: string, durationMinutes: number, numberOfActivities: number): Observable<string[]> {
    const params = new HttpParams()
      .set('startTime', startTime)
      .set('durationMinutes', durationMinutes.toString())
      .set('numberOfActivities', numberOfActivities.toString());

    return this.http.get<string[]>(`${this.baseURL}events/${eventId}/schedule`, { params });
  }


  displayTimeRemainingForEvent(eventId: number): Observable<string> {
    return this.http.get<string>(`${this.baseURL}events/${eventId}/timeRemaining`);
  }

  


  

}
