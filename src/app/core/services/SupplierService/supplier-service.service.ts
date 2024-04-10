import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../../../core/models/supplier/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.apiUrl}/addSupplier`, supplier);
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
}

