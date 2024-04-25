import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Transport } from 'src/app/core/models/transport/transport';
import { Logistic } from 'src/app/core/models/logistic/logistic';
import { LogisticService } from 'src/app/core/services/LogisticService/logistic-service.service';

@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.css']
})
export class AddTransportComponent implements OnInit {
  transportForm!: FormGroup; 

  logistics: Logistic[] = [];
  constructor(private transportService: TransportService, private formBuilder: FormBuilder, private logisticService: LogisticService) { }

  ngOnInit(): void {

    this.logisticService.getAllLogistics().subscribe(logistics => {
      this.logistics = logistics;
    });

    this.transportForm = this.formBuilder.group({
      route: ['', Validators.required],
      description: ['', Validators.required],
       startLocation_longitude: ['', Validators.required],
      startLocation_latitude: ['', Validators.required],
      endLocation_longitude: ['', Validators.required],
      endLocation_latitude: ['', Validators.required],
      id_logistic: ['', Validators.required]
    });
  }

  addTransport(): void {
    if (this.transportForm.valid) {
      this.transportService.addTransport(this.transportForm.value , this.transportForm.value.id_logistic)
        .subscribe({
          next: (res: Transport) => {
            console.log(res);
            alert('Transport added successfully!');
            this.transportForm.reset(); // Reset the form after successful addition
          },
          error: (e) => {
            console.error(e);
            alert('There was an error adding the transport. Please check the form for any missing or incorrect information.');
          }
        });
    } else {
      alert('The form is not valid. Please check all fields and try again.');
    }
  }
  
}
