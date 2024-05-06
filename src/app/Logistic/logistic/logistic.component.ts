import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/Services/staff.service';
import { EquipmentService } from 'src/app/Services/equipment.service';
import { SupplierService } from 'src/app/Services/supplier.service';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { VehiculeService } from 'src/app/core/services/VehiculeService/vehicule-service.service';
import { count } from 'rxjs';
@Component({
  selector: 'app-logistic',
  templateUrl: './logistic.component.html',
  styleUrls: ['./logistic.component.css']
})
export class LogisticComponent implements OnInit {
  staffCount!: number;
  equipmentCount!: number;
  supplierCount!: number;
  transportCount !: number;
  vehiculeCount!:number;

  constructor(
    private staffService: StaffService,
    private equipmentService: EquipmentService,
    private supplierService: SupplierService,
    private transportService : TransportService,
    private vehiculeService : VehiculeService
  ) { }

  ngOnInit(): void {
    this.staffService.countStaff().subscribe(count => this.staffCount = count);
    this.equipmentService.countEquipment().subscribe(count => this.equipmentCount = count);
    this.supplierService.countSupplier().subscribe(count => this.supplierCount = count);
    this.transportService.countTransport().subscribe(count=>this.transportCount=count);
    this.vehiculeService.countVehicule().subscribe(count=>this.vehiculeCount=count);
  }
}
