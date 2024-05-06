import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Transport } from 'src/app/core/models/transport/transport';

@Component({
  selector: 'app-update-transport',
  templateUrl: './update-transport.component.html',
  styleUrls: ['./update-transport.component.css']
})
export class UpdateTransportComponent implements OnInit {
  transportForm: FormGroup;
  id_transport!: number;

  constructor(private transportService: TransportService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.transportForm = this.formBuilder.group({
      route: ['', Validators.required],
      description: ['', Validators.required],
      startLocation: ['', Validators.required],
      endLocation: ['', Validators.required],
      startLocation_longitude: ['', Validators.required],
        startLocation_latitude: ['', Validators.required],

        endLocation_longitude: ['', Validators.required],
        endLocation_latitude: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id_transport = +params['id_transport']; 
      this.getTransportDetails(this.id_transport);
    });
  }

  getTransportDetails(id_transport: number): void {
    this.transportService.getTransportById(id_transport).subscribe((data: Transport) => {
      this.transportForm.patchValue({
        route: data.route,
        description: data.description,
        startLocation_longitude: data.startLocation_longitude,
        startLocation_latitude: data.startLocation_latitude,

        endLocation_longitude: data.endLocation_longitude,
        endLocation_latitude: data.endLocation_latitude
        
      });
    });
  }

  saveTransport(): void {
    if (this.transportForm.valid) {
      this.transportService.updateTransport(this.id_transport, this.transportForm.value).subscribe({
        next: (res) => {
          console.log(res);
          alert('Transport updated successfully!');
        },
        error: (e) => {
          console.error(e);
          alert('There was an error updating the transport. Please try again.');
        }
      });
    } else {
      alert('The form is not valid. Please check all fields and try again.');
    }
  }
}
