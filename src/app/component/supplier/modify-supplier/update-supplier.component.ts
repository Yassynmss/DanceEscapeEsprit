// update-supplier.component.ts
import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/core/services/SupplierService/supplier-service.service';
import { Supplier } from 'src/app/core/models/supplier/supplier';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {

  id_supplier!: number;
  supplier: Supplier = new Supplier();
  constructor(private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id_supplier = this.route.snapshot.params['id_supplier'];

    this.supplierService.getSupplierById(this.id_supplier).subscribe(data => {
      this.supplier = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.supplierService.updateSupplier(this.id_supplier, this.supplier).subscribe( data =>{
      this.goToSupplierList();
    }
    , error => console.log(error));
  }

  goToSupplierList(){
    this.router.navigate(['/listsupplier']);
  }
}
