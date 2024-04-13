
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-alltemplateback',
  templateUrl: './alltemplateback.component.html',
  styleUrls: ['./alltemplateback.component.css']
})
export class AlltemplatebackComponent implements OnInit{
  chart: any;
  rolesData: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchRolesStats();
  }

  fetchRolesStats(): void {
    this.userService.getRolesStats().subscribe(data => {
      this.rolesData = data;
      this.createChart();
    });
  }

  createChart(): void {
    const ctx = document.getElementById('rolesChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.rolesData.map(role => role[0]),
        datasets: [{
          label: 'Roles',
          data: this.rolesData.map(role => role[1]),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
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
  }
}
