import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/core/services/StaffService/staff-service.service';
import { Staff, Job } from 'src/app/core/models/staff/staff';
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
      const jobs = Object.values(Job).filter(value => isNaN(Number(value)));

      const jobCounts = jobs.map(job => data.filter((staff: Staff) => staff.job === job).length);

      const backgroundColors = jobs.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`); // Generate a random color for each job

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: jobs,
          datasets: [{
            label: 'Job',
            data: jobCounts,
            backgroundColor: backgroundColors,
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value, index, values) {
                  return value.toLocaleString(); // Format the value to a string with a thousands separator
                }
              }
            }
          }
        }
      });
    });
  }
}
