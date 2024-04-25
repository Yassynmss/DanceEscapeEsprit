import { Component } from '@angular/core';
import { Logistic} from 'src/app/core/models/logistic/logistic';
import { LogisticService } from 'src/app/core/services/LogisticService/logistic-service.service';
import { Event } from 'src/app/core/event';
@Component({
  selector: 'app-mlogistic',
  templateUrl: './mlogistic.component.html',
  styleUrls: ['./mlogistic.component.css']
})
export class MlogisticComponent {
  logistics: Logistic[] = [];
  newLogistic: Logistic = new Logistic();
  id_event!: number;

  constructor(private logisticService: LogisticService) { }

  ngOnInit(): void {
    this.getAllLogistics();
  }

  getAllLogistics(): void {
    this.logisticService.getAllLogistics().subscribe(logistics => {
      this.logistics = logistics;
    });
  }

  addLogistic(): void {
    this.logisticService.addLogistic(this.newLogistic, this.id_event).subscribe(logistic => {
      this.logistics.push(logistic);
    });
  }

  deleteLogistic(id_logistic: number): void {
    if (confirm('Are you sure you want to delete this logistic?')) {
      this.logisticService.deleteLogistic(id_logistic).subscribe(() => {
        this.logistics = this.logistics.filter(logistic => logistic.id_logistic !== id_logistic);
      });
    }
  }
}