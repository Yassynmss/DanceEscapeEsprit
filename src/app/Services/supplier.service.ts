import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../core/models/supplier/supplier';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiUrl: string = 'http://localhost:8080'; // Définir le type de apiUrl comme une chaîne

  constructor(private http: HttpClient) { }

  addSupplier(supplier: Supplier, id_logistic: number): Observable<Supplier> {
    const url = `${this.apiUrl}/addSupplier/${id_logistic}`; // Utilisation des guillemets inversés pour interpoler les variables
    return this.http.post<Supplier>(url, supplier);
  }


  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}/getAllSuppliers`);
  }

  updateSupplier(id_supplier: number, supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${this.apiUrl}/updatesupplier/${id_supplier}`, supplier);
  }

  deleteSupplier(id_supplier: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteSupplier/${id_supplier}`);
  }

  getSupplier(id_supplier: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.apiUrl}/getSupplier/${id_supplier}`);
  }

  getSupplierById(id_supplier: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.apiUrl}/getSupplierById/${id_supplier}`);
  }

  searchSupplier(id_supplier: number | null, name: string | null): Observable<Supplier[]> {
    let url = `${this.apiUrl}/searchSupplier`;
    let params = new HttpParams();
    if (id_supplier !== null) {
      params = params.append('id_supplier', id_supplier.toString());
    }
    if (name !== null) {
      params = params.append('name', name);
    }
    return this.http.get<Supplier[]>(url, { params: params });
  }
  countSupplier(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/countSupplier`);
  }


  
  assignLogisticToSupplier(id_supplier: number, id_logistic: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/supplier/${id_supplier}/logistic/${id_logistic}`, {}); // Ajoutez un corps de requête vide
  }
}
