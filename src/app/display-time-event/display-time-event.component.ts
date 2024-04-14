import { Component } from '@angular/core';
import { EventService } from '../Services/event.service';

@Component({
  selector: 'app-display-time-event',
  templateUrl: './display-time-event.component.html',
  styleUrls: ['./display-time-event.component.css']
})
export class DisplayTimeEventComponent {


  constructor(private eventService: EventService) {}

 

}
