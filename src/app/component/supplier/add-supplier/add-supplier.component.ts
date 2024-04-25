
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SupplierService } from 'src/app/core/services/SupplierService/supplier-service.service';
import { Supplier } from 'src/app/core/models/supplier/supplier';
import { Logistic } from 'src/app/core/models/logistic/logistic';
import { LogisticService } from 'src/app/core/services/LogisticService/logistic-service.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
  supplierForm!: FormGroup;
  logistics: Logistic[] = [];
  constructor(private supplierService: SupplierService, private logisticService: LogisticService) { }

  ngOnInit(): void {

    this.logisticService.getAllLogistics().subscribe(logistics => {
      this.logistics = logistics;
    });

    this.supplierForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contact_info: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]),
      email: new FormControl('', [Validators.required, Validators.email]),
      id_logistic: new FormControl('', Validators.required)
      
    });
  }

  saveSupplier(): void {
    if (this.supplierForm.valid) {
      this.supplierService.addSupplier(this.supplierForm.value,this.supplierForm.value.id_logistic)
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
