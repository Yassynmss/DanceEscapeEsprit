import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from '../../../core/models/equipment/equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentServiceService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  addEquipment(equipment: Equipment): Observable<Equipment> {
    return this.http.post<Equipment>(`${this.apiUrl}/addEquipment`, equipment);
  }

  getAllEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.apiUrl}/getAllEquipments`);
  }
/*
  updateEquipment(id_equipment: number, equipment: Equipment): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateEquipment/${id_equipment}`, equipment);
  }*/

  UpdateEquipment( equipment: Equipment): Observable<Equipment> {
    return this.http.put<Equipment>(`${this.apiUrl}/updateEquipment`, equipment);
  }

  deleteEquipment(id_equipment: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteEquipment/${id_equipment}`);
  }

  getEquipmentById(id_equipment:any): Observable<Equipment> {
    return this.http.get<Equipment>(`${this.apiUrl}/getEquipmentById/${id_equipment}`);
  }

  

  updateEquipmentwaw(idEquipment: number, equipment: Equipment): Observable<Equipment> {
    
    return this.http.put<Equipment>(`${this.apiUrl}/updateEquipmentwaw/${idEquipment}`, equipment);
  }

  updateEquipment(idEquipment: number, updatedEquipment: Equipment): Observable<Equipment> {
    const url = `${this.apiUrl}/updateEquipmentwaw/${idEquipment}`;
    return this.http.put<Equipment>(url, updatedEquipment);
  }
}

