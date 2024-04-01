import { Component, OnInit } from '@angular/core';

import { StaffService } from 'src/app/core/services/StaffService/staff-service.service';
import { Staff } from 'src/app/core/models/staff/staff';


import { Chart, BarController, BarElement, LinearScale, CategoryScale } from 'chart.js';
Chart.register(BarController, BarElement, LinearScale, CategoryScale);

@Component({
  selector: 'app-chart-staff',
  templateUrl: './chart-staff.component.html',
  styleUrls: ['./chart-staff.component.css']
})
export class ChartStaffComponent implements OnInit {
  chart!: Chart;

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.staffService.getAllStaff().subscribe(data => {
      const labels = data.map((staff: Staff) => staff.name);
      const ages = data.map((staff: Staff) => this.calculateAge(staff.DateOfBirth.toString()));


      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Age',
            data: ages,
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
  calculateAge(dateOfBirth: string): number {
    const birthDate = new Date(dateOfBirth);
    const ageDiffMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  
}
