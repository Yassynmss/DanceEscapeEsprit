import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';
import { Equipment } from 'src/app/core/models/equipment/equipment';
@Component({
  selector: 'app-equipment-chart',
  templateUrl: './equipment-chart.component.html',
  styleUrls: ['./equipment-chart.component.css']
})
export class EquipmentChartComponent implements OnInit {
  chart!: Chart;

  constructor(private equipmentService: EquipmentServiceService) { }

  ngOnInit(): void {
    this.equipmentService.getEquipmentQuantities().subscribe(data => {
      const labels = data.map((equipment: { name: any; }) => equipment.name);
      const quantities = data.map((equipment: { quantity: any; }) => equipment.quantity);

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
