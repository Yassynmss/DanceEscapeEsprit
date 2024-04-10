import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from '../../../core/models/equipment/equipment';
import { Logistic } from '../../models/logistic/logistic';

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
  getLogistics(): Observable<Logistic[]> {
    return this.http.get<Logistic[]>(`${this.apiUrl}/getAllLogistics`);
  }
  updateEquipment(id_equipment: number, equipment: Equipment): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateEquipment/${id_equipment}`, equipment);
  }

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
  searchEquipment(id_equipment: number | null, name_equipment: string | null, etat: string | null): Observable<Equipment[]> {
    let url = `${this.apiUrl}/searchEquipment`;
    let params = new HttpParams();
    if (id_equipment !== null) {
      params = params.append('id_equipment', id_equipment.toString());
    }
    if (name_equipment !== null) {
      params = params.append('name_equipment', name_equipment);
    }
    if (etat !== null) {
      params = params.append('etat', etat);
    }
    return this.http.get<Equipment[]>(url, { params: params });
  }

  getEquipmentQuantities(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getEquipmentQuantities`);
  }
  countEquipment(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/countEquipment`);
  }
  increaseEquipmentQuantity(id_equipment: number): Observable<Equipment> {
    return this.http.post<Equipment>(`${this.apiUrl}/increaseEquipmentQuantity/${id_equipment}`, {}, { responseType: 'json' });
}

decreaseEquipmentQuantity(id_equipment: number): Observable<Equipment> {
    return this.http.post<Equipment>(`${this.apiUrl}/decreaseEquipmentQuantity/${id_equipment}`, {}, { responseType: 'json' });
}

}


