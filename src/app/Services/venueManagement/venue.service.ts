import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venue } from 'src/app/core/venue';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  private baseURL = "http://localhost:8080/venues";

  constructor(private http: HttpClient) { }

  createVenue(venue: Venue): Observable<Venue> {
    return this.http.post<Venue>(this.baseURL, venue);
  }

  getAllVenues(): Observable<Venue[]> {
    return this.http.get<Venue[]>(this.baseURL);
  }

  getVenueById(id: number): Observable<Venue> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Venue>(url);
  }

  updateVenue(id: number, venue: Venue): Observable<Venue> {
    const url = `${this.baseURL}/${id}`;
    return this.http.put<Venue>(url, venue);
  }

  deleteVenue(id: number): Observable<void> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<void>(url);
  }

  isEventFull(id: number): Observable<string> {
    const url = `${this.baseURL}/${id}/eventfull`;
    return this.http.get<string>(url);
  }
  
}
