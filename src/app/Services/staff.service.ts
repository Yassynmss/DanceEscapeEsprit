import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from '../core/models/staff/staff';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(`${this.apiUrl}/addStaff`, staff); // Utilisation de guillemets inversés pour interpoler la variable
  }

  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.apiUrl}/getAllStaff`); // Utilisation de guillemets inversés pour interpoler la variable
  }

  updateStaff(id_staff: number, staff: Staff): Observable<Staff> {
    return this.http.put<Staff>(`${this.apiUrl}/updateStaff/${id_staff}`, staff); // Utilisation de guillemets inversés pour interpoler la variable
  }

  countStaff(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/countStaff`); // Utilisation de guillemets inversés pour interpoler la variable
  }

  deleteStaff(id_staff: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteStaff/${id_staff}`); // Utilisation de guillemets inversés pour interpoler la variable
  }

  searchStaff(id_staff: number | null, name: string | null, job: string | null): Observable<Staff[]> {
    let url = `${this.apiUrl}/searchStaff`; // Utilisation de guillemets inversés pour interpoler la variable
    let params = new HttpParams();
    if (id_staff !== null) {
      params = params.append('id_staff', id_staff.toString());
    }
    if (name !== null) {
      params = params.append('name', name);
    }
    if (job !== null) {
      params = params.append('job', job);
    }
    return this.http.get<Staff[]>(url, { params: params });
  }

  getStaffById(id_staff: any): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/getStaffById/${id_staff}`); // Utilisation de guillemets inversés pour interpoler la variable
  }

  assignLogisticToStaff(id_staff: number, id_logistic: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/staff/${id_staff}/logistic/${id_logistic}`, {}); // Utilisation de guillemets inversés pour interpoler la variable
  }

  addStafff(staff: Staff, id_logistic: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/addStafff/${id_logistic}`, staff); // Utilisation de guillemets inversés pour interpoler la variable
  }

  getAllDrivers(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.apiUrl}/getAllDrivers`); // Utilisation de guillemets inversés pour interpoler la variable
  }

  getDriverById(id_staff: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/getDriverById/${id_staff}`); // Utilisation de guillemets inversés pour interpoler la variable
  }

  getUnassignedDrivers(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.apiUrl}/getUnassignedDrivers`); // Utilisation de guillemets inversés pour interpoler la variable
  }
}
