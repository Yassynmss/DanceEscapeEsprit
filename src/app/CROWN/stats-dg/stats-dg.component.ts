import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-stats-dg',
  templateUrl: './stats-dg.component.html',
  styleUrls: ['./stats-dg.component.css']
})
export class StatsDGComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Suppose you have retrieved group names and member counts from the server
    const groupNames = ['Group A', 'Group B', 'Group C'];
    const memberCounts = [10, 15, 8];

    this.createChart(groupNames, memberCounts);
  }

  createChart(groupNames: string[], memberCounts: number[]) {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Could not retrieve canvas context.');
      return;
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: groupNames,
        datasets: [{
          label: 'Nombre de membres',
          data: memberCounts,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
