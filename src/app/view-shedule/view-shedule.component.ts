import { Component, OnInit } from '@angular/core';
import { EventService } from '../Services/event.service';
import { MapDisplayFrontAzizComponent } from '../map-display-front-aziz/map-display-front-aziz.component';

@Component({
  selector: 'app-view-shedule',
  templateUrl: './view-shedule.component.html',
  styleUrls: ['./view-shedule.component.css']
})
export class ViewSheduleComponent implements OnInit {

  schedule: string[] = [];   
  map: any;
  
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    // Appel de la méthode generateSchedule avec des valeurs d'exemple
    this.eventService.generateSchedule(123, '12:00', 60, 5).subscribe(schedule => {
      this.schedule = schedule;
      
    });
  }


  
  





}
