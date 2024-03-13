import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/core/models/equipment/equipment';
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {
  equipments: Equipment[] = [];
  id_equipment: number | null = null;
  name_equipment: string | null = null;
  etat: string | null = null;

  constructor(private equipmentService: EquipmentServiceService) { }

  ngOnInit(): void {
    this.retrieveEquipments();
  }

  retrieveEquipments(): void {
    this.equipmentService.getAllEquipments()
      .subscribe({
        next: (data) => {
          this.equipments = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  removeEquipment(equipment: Equipment): void {
    if (equipment.id_equipment) {
      this.equipmentService.deleteEquipment(equipment.id_equipment)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.retrieveEquipments();
          },
          error: (e) => console.error(e)
        });
    }
  }

  searchEquipment(): void {
    this.equipmentService.searchEquipment(this.id_equipment, this.name_equipment, this.etat)
      .subscribe({
        next: (data) => {
          this.equipments = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
