













import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Equipment } from 'src/app/core/models/equipment/equipment';
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';
import { saveAs as fileSaverSaveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Logistic } from 'src/app/core/models/logistic/logistic';
import { LogisticService } from 'src/app/core/services/LogisticService/logistic-service.service';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {
  equipments: any[] = [];
  conditions: string[] = ['New', 'Like New', 'Good', 'Fair', 'Poor'];
  name_equipment: string | null = null;
  etat: string | null = null;
  id_equipment: number | null = null;
  searchTerm$ = new Subject<void>();
  logistics: Logistic[] = [];
  constructor(private equipmentService: EquipmentServiceService,  private logisticService: LogisticService) { }

  ngOnInit() {
    this.logisticService.getAllLogistics().subscribe(logistics => {
      this.logistics = logistics;
    });
    
    this.searchTerm$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(() => {
      this.searchEquipment();
    });
    this.searchTerm$.next();
  }

  searchEquipment(): void {
    if (this.etat === '' && this.name_equipment === '' && this.id_equipment === null) {
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

  increaseQuantity(equipment: Equipment): void {
    this.equipmentService.increaseEquipmentQuantity(equipment.id_equipment).subscribe(updatedEquipment => {
      this.retrieveEquipments();
    });
  }

  decreaseQuantity(equipment: Equipment): void {
    if (equipment.quantity > 0) {
      this.equipmentService.decreaseEquipmentQuantity(equipment.id_equipment).subscribe(updatedEquipment => {
        this.retrieveEquipments();
      });
    } else {
      console.log('La quantité ne peut pas être inférieure à zéro');
    }
  }
  assignToLogistic(equipment: Equipment, id_logistic: number): void {
    this.equipmentService.assignLogisticToEquipment(equipment.id_equipment, id_logistic)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.retrieveEquipments();
        },
        error: (e) => console.error(e)
      });
  }
}

     


