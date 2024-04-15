import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validator, Validators } from '@angular/forms';
import { Type_event } from '../core/eventenum';
import { Event } from '../core/event';
import { EventService } from '../Services/event.service';

@Component({
  selector: 'app-eventadd',
  templateUrl: './eventadd.component.html',
  styleUrls: ['./eventadd.component.css']
})
export class EventaddComponent implements OnInit {
  eventForm!: FormGroup;
  editingEvent: Event | null = null;
  constructor(private fb: FormBuilder, private eventService:EventService) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({

      name_event: ['', Validators.required],
      date_event: ['', Validators.required],
      location_event: ['', Validators.required],
      theme_event: ['', Validators.required],
      regulations: ['', Validators.required],
      nb_competitions: ['', Validators.required],
      sales_counters_event: ['', Validators.required],
      public_capacity: ['', Validators.required],
      sound_system_event: ['', Validators.required],
      typeevent: ['', Validators.required],
      kids: [true, Validators.required]

    });
  }

  createEvent(): void {
    if (this.eventForm.valid){
      const newEvent:Event = this.eventForm.value as Event;
      this.eventService.createEvent(newEvent).subscribe(
        (response: any) => {
            console.log(response);
           
        },
        (error) => {
            console.error(error);
            
        }
    );
    }}

    updateEvent(): void{
      if (this.editingEvent && this.eventForm.valid)
      {
        const update: Event= {...this.editingEvent, ...this.eventForm.value} as Event;
        this.eventService.createEvent(update).subscribe(():void =>
        {
          this.createEvent();
          this.eventForm.reset();
          this.editingEvent=null;
        });

        


      }}

      editevent(eventss:Event):void {
        this.editingEvent =eventss;
        this.eventForm.patchValue({
            
            name_event: eventss.name_event,
            date_event: eventss.date_event,
            location_event: eventss.location_event,
            theme_event: eventss.theme_event,
            regulations: eventss.regulations,
            nb_competitions: eventss.nb_competitions,
            sales_counters_event: eventss.sales_counters_event,
            public_capacity: eventss.public_capacity,
            sound_system_event: eventss.sound_system_event,
            typeevent: eventss.typeevent,
            kids: eventss.kids});
          }

        
      }
    

    

    


      
  
  

  




  
  

  

  


