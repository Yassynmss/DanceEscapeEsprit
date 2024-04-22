import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicule } from '../../models/vehicule/vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }
  
  
  addVehicule(vehiculeData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addVehicule`, vehiculeData);
  }

  uploadImage(image: File): Observable<void> {
    const formData: FormData = new FormData();
    formData.append('image', image);

    return this.http.post<void>(`${this.apiUrl}/upload`, formData);
  }

  getAllVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${this.apiUrl}/getAllVehicules`);
  }

  updateVehicule(id_vehicule: number, vehicule: Vehicule): Observable<Vehicule> {
    return this.http.put<Vehicule>(`${this.apiUrl}/updateVehicule/${id_vehicule}`, vehicule);
  }

  deleteVehicule(id_vehicule: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteVehicule/${id_vehicule}`);
  }

  getVehiculeById(id_vehicule: number): Observable<Vehicule> {
    return this.http.get<Vehicule>(`${this.apiUrl}/getVehiculeById/${id_vehicule}`);
  }

  
}
