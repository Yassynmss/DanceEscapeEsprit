import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/core/services/StaffService/staff-service.service';
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';
import { SupplierService } from 'src/app/core/services/SupplierService/supplier-service.service';

@Component({
  selector: 'app-logistic',
  templateUrl: './logistic.component.html',
  styleUrls: ['./logistic.component.css']
})
export class LogisticComponent implements OnInit {
  staffCount!: number;
  equipmentCount!: number;
  supplierCount!: number;

  constructor(
    private staffService: StaffService,
    private equipmentService: EquipmentServiceService,
    private supplierService: SupplierService
  ) { }

  ngOnInit(): void {
    this.staffService.countStaff().subscribe(count => this.staffCount = count);
    this.equipmentService.countEquipment().subscribe(count => this.equipmentCount = count);
    this.supplierService.countSupplier().subscribe(count => this.supplierCount = count);
  }
}
