import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipment } from 'src/app/core/models/equipment/equipment';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';
@Component({
  selector: 'app-add-equipment-dialog',
  templateUrl: './add-equipment-dialog.component.html',
  styleUrls: ['./add-equipment-dialog.component.css']
})
export class AddEquipmentDialogComponent {


  transportId: number;
  availableEquipments: Equipment[] = [];
  selectedEquipments: Equipment[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private transportService: TransportService, private equipmentService:EquipmentServiceService) {
    this.transportId = this.route.snapshot.params['id_transport'];
  }

  ngOnInit() {
    this.transportService.getEquipmentsForTransport(this.transportId).subscribe(equipments => {
      this.availableEquipments = equipments;

    });


    this.equipmentService.getAllEquipments().subscribe(equipments => {
      this.availableEquipments = equipments;
  });}

  addToSelected(equipment: Equipment): void {
    this.selectedEquipments.push(equipment);
    this.availableEquipments = this.availableEquipments.filter(e => e !== equipment);
  }

  removeFromSelected(equipment: Equipment): void {
    this.availableEquipments.push(equipment);
    this.selectedEquipments = this.selectedEquipments.filter(e => e !== equipment);
  }

  confirmSelection(): void {
    this.transportService.addEquipmentsToTransport(this.transportId, this.selectedEquipments.map(e => e.id_equipment))
      .subscribe(() => {
        this.router.navigate(['/admin/listtransport']);
      });
  }
}