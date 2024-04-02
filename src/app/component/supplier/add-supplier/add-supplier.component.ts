
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
            alert('Supplier added successfully!');
          },
          error: (e) => {
            console.error(e);
            alert('There was an error adding the supplier. Please check the form for any missing or incorrect information.');
          }
        });
    } else {
      alert('The form is not valid. Please check all fields and try again.');
    }
  }
}
