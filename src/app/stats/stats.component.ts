/*import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart, ChartScales } from 'chart.js';
import { Observable, map } from 'rxjs';
import { UserAuthServiceService } from 'src/app/serives/auth/user-auth-service.service';
import { AuthenticationService } from 'src/app/serives/authentication.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{
  constructor(private elementRef: ElementRef,private service : AuthenticationService) {}
  public NbrUSER:number=0;
  public NbrADMIN:number=0;
  public NbrVISITOR:number=0;
  public NbrEVALUATOR:number=0;
  public NbrDANCER:number=0;
  ngOnInit() {
    this.service.getLengthByRole("USER").subscribe((data) => {
     // console.log(data);
      this.NbrUSER = data;
  
      this.NbrUserWithRole("ADMIN").subscribe((data) => {
       // console.log(data);
        this.NbrADMIN = data;
  
        this.NbrUserWithRole("VISITOR").subscribe((data) => {
         // console.log(data);
          this.NbrVISITOR = data;
  
          this.NbrUserWithRole("EVALUATOR").subscribe((data) => {
           // console.log(data);
            this.NbrEVALUATOR = data;
          
            this.NbrUserWithRole("DANCER").subscribe((data) => {
              // console.log(data);
               this.NbrDANCER = data;
           
                 
                     });
                   });
                 });
           
               });

             });
      
  }


  public NbrUserWithRole(role:string): Observable<number> {
    return this.service.getLengthByRole(role).pipe(map(data => {
      if (role === "USER") {
        this.NbrUSER = data;
      }
      if (role === "ADMMIN") {
        this.NbrADMIN = data;
      }
      if (role === "VISITOR") {
        this.NbrVISITOR = data;
      }
      if (role === "DANCER") {
        this.NbrDANCER = data;
      }
      if (role === "EVALUATOR") {
        this.NbrEVALUATOR = data;
      }
      
     // console.log(role + " : " + data);
      return data;
    }));
  }
  
  createChart(): void {
    const canvas = this.elementRef.nativeElement.querySelector('#myChart');
    const ctx = canvas.getContext('2d');
  
    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['USER', 'ADMIN', 'EVALUATOR', 'DANCER', 'VISITOR'],
        datasets: [{
          label: '# of Votes',
          data: [this.NbrUSER, this.NbrADMIN, this.NbrVISITOR, this.NbrEVALUATOR, this.NbrDANCER],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          // Utilisez une assertion de type pour indiquer à TypeScript que 'r' est une propriété valide
          r: {
            beginAtZero: true
          } as ChartScales['r']
        }
      }
    });
  }
  
}*/