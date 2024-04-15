import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/core/services/SupplierService/supplier-service.service';
import { Supplier } from 'src/app/core/models/supplier/supplier';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css'],
})
export class UpdateSupplierComponent implements OnInit {
  supplierForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private supplierService: SupplierService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id_supplier = this.activatedRoute.snapshot.params['id_supplier'];
    this.supplierForm = this.fb.group({
      id_supplier: [id_supplier, [Validators.required]],
      name: ['', [Validators.required]],
      contact_info: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.getSupplierById(id_supplier);
  }

getSupplierById(id_supplier: number) {
    this.supplierService.getSupplierById(id_supplier).subscribe((res) => {
      this.supplierForm.patchValue(res);
    });
  }
  updateSupplier() {
    if (this.supplierForm.valid) {
      const id_supplier = this.supplierForm.get('id_supplier')?.value;
      this.supplierService.updateSupplier(id_supplier, this.supplierForm.value).subscribe(
        () => {
          alert('Update done');
          this.router.navigate(['/listsupplier']);
        },
        (error) => {
          console.error('Error updating supplier:', error);
          alert('Update failed');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }
}
