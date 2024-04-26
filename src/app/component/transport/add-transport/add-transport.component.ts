import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Transport } from 'src/app/core/models/transport/transport';
import { Logistic } from 'src/app/core/models/logistic/logistic';
import { LogisticService } from 'src/app/core/services/LogisticService/logistic-service.service';
import * as L from 'leaflet';
import 'leaflet-search';
@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.css']
})
export class AddTransportComponent implements OnInit, AfterViewInit {
  transportForm!: FormGroup; 
  logistics: Logistic[] = [];
  map!: L.Map;
  startMarker!: L.Marker;
  endMarker!: L.Marker;
  thirdMarker!: L.Marker;

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

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {

    
    this.map = L.map('map').setView([34.0000, 9.0000], 8); // Centrer la carte sur la Tunisie

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);

    this.map.on('click', (e) => {
      if (!this.startMarker) {
        this.startMarker = L.marker(e.latlng).addTo(this.map);
        this.transportForm.patchValue({
          startLocation_latitude: e.latlng.lat,
          startLocation_longitude: e.latlng.lng
        });
      } else if (!this.endMarker) {
        this.endMarker = L.marker(e.latlng).addTo(this.map);
        this.transportForm.patchValue({
          endLocation_latitude: e.latlng.lat,
          endLocation_longitude: e.latlng.lng
        });
      } else if (!this.thirdMarker) {
        this.thirdMarker = L.marker(e.latlng).addTo(this.map);
        // Vous pouvez ajouter des actions supplémentaires ici
      }
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
