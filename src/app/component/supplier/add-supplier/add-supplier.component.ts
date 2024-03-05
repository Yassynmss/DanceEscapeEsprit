// add-supplier.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SupplierService } from 'src/app/core/services/SupplierService/supplier-service.service';
import { Supplier } from 'src/app/core/models/supplier/supplier';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
  supplierForm!: FormGroup;

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.supplierForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contact_info: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]),
      email: new FormControl('', [Validators.required, Validators.email])
      
    });
  }

  saveSupplier(): void {
    if (this.supplierForm.valid) {
      this.supplierService.addSupplier(this.supplierForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (e) => console.error(e)
        });
    } else {
      console.log('Le formulaire n\'est pas valide');
    }
  }
}
