
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transport } from '../../models/transport/transport';
import { Logistic } from '../../models/logistic/logistic';
import { Staff } from '../../models/staff/staff';
import { Equipment } from '../../models/equipment/equipment';
@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addTransport(transport: Transport, id_logistic: number): Observable<Transport> {
    return this.http.post<Transport>(`${this.apiUrl}/addTransport${id_logistic}`, transport);
  }

  getAllTransports(): Observable<Transport[]> {
    return this.http.get<Transport[]>(`${this.apiUrl}/getAllTransports`);
  }

  updateTransport(id_transport: number, transport: Transport): Observable<Transport> {
    return this.http.put<Transport>(`${this.apiUrl}/updateTransport/${id_transport}`, transport);
  }

  deleteTransport(id_transport: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteTransport/${id_transport}`);
  }

  getTransportById(id_transport: number): Observable<Transport> {
    return this.http.get<Transport>(`${this.apiUrl}/getTransportById/${id_transport}`);
  }

  countTransport(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/countTransport`);
  }

  assignLogisticToTransport(id_transport: number, id_logistic: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/transport/${id_transport}/logistic/${id_logistic}`, {}); // Ajoutez un corps de requête vide
  }

  assignDriverToTransport(id_transport: number, id_staff: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/transport/${id_transport}/staff/${id_staff}`, {});
  }
  
  addEquipmentsToTransport(id_transport: number, id_equipments: number[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/addEquipmentsToTransport/${id_transport}/equipments`, id_equipments);
}
getEquipmentsForTransport(id_transport: number): Observable<Equipment[]> {
  return this.http.get<Equipment[]>(`${this.apiUrl}/getEquipmentsForTransport/${id_transport}/equipments`);
}
deleteEquipmentFromTransport(id_transport: number, id_equipment: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/deleteEquipmentFromTransport/${id_transport}/equipment/${id_equipment}`);
}
}





