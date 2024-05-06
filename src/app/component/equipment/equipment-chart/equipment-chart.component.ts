import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { EquipmentService } from 'src/app/Services/equipment.service';
@Component({
  selector: 'app-equipment-chart',
  templateUrl: './equipment-chart.component.html',
  styleUrls: ['./equipment-chart.component.css']
})
export class EquipmentChartComponent implements OnInit {
  chart!: Chart;

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.equipmentService.getAllEquipments().subscribe(data => {
      const labels = data.map(equipment => equipment.name_equipment);
      const quantities = data.map(equipment => equipment.quantity);

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
