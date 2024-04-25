import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/core/services/SupplierService/supplier-service.service';
import { Supplier } from 'src/app/core/models/supplier/supplier';
import * as XLSX from 'xlsx';
import { saveAs as fileSaverSaveAs } from 'file-saver';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Logistic } from 'src/app/core/models/logistic/logistic';
import { LogisticService } from 'src/app/core/services/LogisticService/logistic-service.service';
@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-supplier.component.html',
  styleUrls: ['./list-supplier.component.css']
})
export class ListSupplierComponent implements OnInit {
  supplierList: Supplier[] = [];
  id_supplier: number | null = null;
  name: string | null = null;
  searchTerm$ = new Subject<string>();

  logistics: Logistic[] = [];
  constructor(private supplierService: SupplierService ,  private logisticService: LogisticService) { }
  searchTerm: string = '';
 
  
  ngOnInit() {

    this.logisticService.getAllLogistics().subscribe(logistics => {
      this.logistics = logistics;
    });
    this.searchTerm$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(term => {
      this.supplierService.searchSupplier(null, term).subscribe(results => {
        this.supplierList = results;
      });
    });
  
    // Initiate the search with an empty string or any default value
    this.searchTerm$.next(this.searchTerm);
  }
  
  onSearchTermChange() {
    this.searchTerm$.next(this.searchTerm);
  }
  
  retrieveSuppliers(): void {
    this.supplierService.getAllSuppliers()
      .subscribe({
        next: (data) => {
          this.supplierList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  sortByID(): void {
    this.supplierList.sort((a, b) => {
      if (a.id_supplier && b.id_supplier) {
        return a.id_supplier - b.id_supplier;
      } else {
        return 0;
      }
    });
  }
  

  sortByName(): void {
    this.supplierList.sort((a, b) => a.name.localeCompare(b.name));
  }

  downloadExcel() {
    const supplierData = this.supplierList.map(supplier => ({
      'ID': supplier.id_supplier,
      'Name': supplier.name,
      'Contact Info': supplier.contact_info,
      'Number': supplier.number,
      'Email': supplier.email
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(supplierData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
    fileSaverSaveAs(data, 'suppliers.xlsx');
  }

  removeSupplier(supplier: Supplier): void {
    if (supplier.id_supplier) {
      this.supplierService.deleteSupplier(supplier.id_supplier)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.retrieveSuppliers();
          },
          error: (e) => console.error(e)
        });
    }
  }

  searchSupplier(): void {
    this.supplierService.searchSupplier(this.id_supplier, this.name)
      .subscribe({
        next: (data) => {
          this.supplierList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  assignToLogistic(supplier: Supplier, id_logistic: number): void {
    this.supplierService.assignLogisticToSupplier(supplier.id_supplier, id_logistic)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.retrieveSuppliers();
        },
        error: (e) => console.error(e)
      });
  }
}
