import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  countVehicule(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/countVehicule `);}
  
    assignTransportToVehicule(id_vehicule: number, id_transport: number): Observable<void> {
      return this.http.put<void>(`${this.apiUrl}/vehicule/${id_vehicule}/transport/${id_transport}`, {}); // Ajoutez un corps de requête vide
    }

    searchVehicule(name_vehicule?: string, etat?: string, matricule?: string, type?: string): Observable<Vehicule[]> {
      let params = new HttpParams();
      if (name_vehicule) {
        params = params.append('name_vehicule', name_vehicule);
      }
      if (etat) {
        params = params.append('etat', etat);
      }
      if (matricule) {
        params = params.append('matricule', matricule);
      }
      if (type) {
        params = params.append('type', type);
      }
  
      return this.http.get<Vehicule[]>(`${this.apiUrl}/searchVehicule`, { params });
    }
  }
  

