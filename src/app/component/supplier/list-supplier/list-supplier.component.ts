import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/core/services/SupplierService/supplier-service.service';
import { Supplier } from 'src/app/core/models/supplier/supplier';

@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-supplier.component.html',
  styleUrls: ['./list-supplier.component.css']
})
export class ListSupplierComponent implements OnInit {
  supplierList: Supplier[] = [];
  id_supplier: number | null = null;
  name: string | null = null;

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.retrieveSuppliers();
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
}
