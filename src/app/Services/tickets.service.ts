import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketType } from '../models/TicketType';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private apiURL = "http://localhost:8080/tickets/";

  constructor(private http: HttpClient) { }
  postTicket(formData: FormData):Observable<any>{
    return this.http.post(this.apiURL + "addticket", formData);

  }

  getAllTickets():Observable<any>{
    return this.http.get(this.apiURL+"fetchTickets")
  
  }
  deleteTicket(id_ticket: any): Observable<any> {

    return this.http.delete(this.apiURL + `deleteTicketById/${id_ticket}`);
  }  
  getTicketById(id_ticket: any): Observable<any> {
    return this.http.get(this.apiURL + `ticket/${id_ticket}` )
  }
  updateTicket(id_ticket: number, ticket: any): Observable<any> {
    return this.http.put(this.apiURL + `update/${id_ticket}`, ticket);
  }
  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiURL + "index");
  }
  addOrUpdateTicketWithEvent( id_event: number, ticketData: any): Observable<any> {
    return this.http.post(this.apiURL+`addorupdateTicketWithEvent/${ id_event}`, ticketData);
  }
  getTicketByEventId( id_event: number): Observable<any> {
    return this.http.get<any>(`${ id_event}`);
  }

  generateTicket( id_event: number, ticketData: any): Observable<any> {
    return this.http.post(this.apiURL+`generateTicket/${ id_event}`, ticketData);
  }
 
  findTicketByPrice(price: number): Observable<any> {
    return this.http.get<any>(this.apiURL+'findByPrice${price}');
  }
 
  calculateTicketPrice(quantity: number, ticketType: string): Observable<number> {
    const url = `${this.apiURL}calculatePrice?quantity=${quantity}&ticketType=${ticketType}`;
    return this.http.get<number>(url);
  }
  searchTicket(criteria: any): Observable<any> {
    let params = new HttpParams();
    for (const key in criteria) {
      if (criteria.hasOwnProperty(key) && criteria[key] !== null && criteria[key] !== undefined) {
        params = params.set(key, criteria[key]);
      }
    }
    return this.http.get<any>(this.apiURL+"searchticket",{ params });
  }
  
}
