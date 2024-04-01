import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/core/models/equipment/equipment';
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';
import { saveAs as fileSaverSaveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
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

  chart!: Chart; 

  constructor(private equipmentService: EquipmentServiceService, private router: Router) { } 

  ngOnInit(): void {
    this.retrieveEquipments();
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

  searchEquipment(): void {
    this.equipmentService.searchEquipment(this.id_equipment, this.name_equipment, this.etat)
      .subscribe(
        data => {
          this.equipments = data;
          console.log(data);
        },
        error => console.error(error)
      );
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

  createChart(): void {
    this.equipmentService.getEquipmentQuantities().subscribe((data: Equipment[]) => {
      const labels = data.map((equipment: Equipment) => equipment.name_equipment);
      const quantities = data.map((equipment: Equipment) => equipment.quantity);
  
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Quantity',
            data: quantities,
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
  
}
