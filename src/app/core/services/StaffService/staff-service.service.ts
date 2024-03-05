import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from '../../models/staff/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = 'http://localhost:8081';  

  constructor(private http: HttpClient) { }

  addStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(`${this.apiUrl}/addStaff`, staff);
  }

  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.apiUrl}/getAllStaff`);
  }

  updateStaff(id_staff: number, staff: Staff): Observable<Staff> {
    return this.http.put<Staff>(`${this.apiUrl}/updateStaff/${id_staff}`, staff);
  }

  deleteStaff(id_staff: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteStaff/${id_staff}`);
  }
}
