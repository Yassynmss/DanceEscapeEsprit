import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/core/models/equipment/equipment';
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';
import { saveAs as fileSaverSaveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
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
  logistic: string | null = null;
  chart!: Chart; 

  constructor(private equipmentService: EquipmentServiceService, private router: Router) { } 

  conditions = ['New', 'Like New', 'Good', 'Fair', 'Poor'];
  searchTerm$ = new Subject<void>();
  
  ngOnInit() {
    this.searchTerm$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(() => {
      this.searchEquipment();
    });
  
    // Initiate the search with an empty string or any default value
    this.searchTerm$.next();
  }
  
  searchEquipment(): void {
    if (this.etat === '') {
      // If the selected condition is empty, retrieve all equipments
      this.retrieveEquipments();
    } else {
      this.equipmentService.searchEquipment(this.id_equipment, this.name_equipment, this.etat)
        .subscribe(
          data => {
            this.equipments = data;
            console.log(data);
          },
          error => console.error(error)
        );
    }
  }


  retrieveEquipments(): void {
    this.equipmentService.getAllEquipments()
      .subscribe(
        data => {
          this.equipments = data;
          console.log(data);
    
        },
        error => console.error(error)
      );
  }

  removeEquipment(equipment: Equipment): void {
    if (equipment.id_equipment) {
      this.equipmentService.deleteEquipment(equipment.id_equipment)
        .subscribe(
          res => {
            console.log(res);
            this.retrieveEquipments();
          },
          error => console.error(error)
        );
    }
  }
  sortByID(): void {
    this.equipments.sort((a, b) => a.id_equipment - b.id_equipment);
  }
  
  sortByName(): void {
    this.equipments.sort((a, b) => a.name_equipment.localeCompare(b.name_equipment));
  }
  
  sortByQuantity(): void {
    this.equipments.sort((a, b) => a.quantity - b.quantity);
  }
  


  downloadExcel() {
    const equipmentData = this.equipments.map(equipment => ({
      'ID': equipment.id_equipment,
      'Name': equipment.name_equipment,
      'Quantity': equipment.quantity,
      'Etat': equipment.etat
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(equipmentData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
    fileSaverSaveAs(data, 'equipments.xlsx');
  }

  // Dans ListEquipmentComponent
increaseQuantity(equipment: Equipment): void {
  this.equipmentService.increaseEquipmentQuantity(equipment.id_equipment).subscribe(updatedEquipment => {
      // Mettez à jour l'équipement dans votre liste d'équipements
      this.retrieveEquipments();
  });
}

decreaseQuantity(equipment: Equipment): void {
  this.equipmentService.decreaseEquipmentQuantity(equipment.id_equipment).subscribe(updatedEquipment => {
      // Mettez à jour l'équipement dans votre liste d'équipements
      this.retrieveEquipments();
  });
}

  
}
