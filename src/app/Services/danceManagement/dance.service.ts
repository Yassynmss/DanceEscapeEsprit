import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DanceCategorie } from 'src/app/core/dancecategorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DanceService {
  private baseURL = "http://localhost:8081/";

  constructor(private http: HttpClient) { }

  getAllDanceCategories(): Observable<DanceCategorie[]> {
    return this.http.get<DanceCategorie[]>(this.baseURL + 'getAllDanceCategories');
  } 

  getDanceCategoryById(id: number): Observable<DanceCategorie> {
    const url = `${this.baseURL}getDanceCategories/${id}`;
    return this.http.get<DanceCategorie>(url);
  }

  addDanceCategorie(danceCategorie: DanceCategorie): Observable<DanceCategorie> {
    return this.http.post<DanceCategorie>(this.baseURL + 'addDanceCategories', danceCategorie);
  }

  deleteDanceCategory(id: number): Observable<any> {
    return this.http.delete(this.baseURL + 'delete' + id);
  }

  updateDanceCategory(danceCategorie: DanceCategorie): Observable<DanceCategorie> {
    return this.http.put<DanceCategorie>(this.baseURL + 'updateDanceCategories', danceCategorie);
  }

  

}
