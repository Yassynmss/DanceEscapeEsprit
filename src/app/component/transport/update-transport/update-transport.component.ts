import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Transport } from 'src/app/core/models/transport/transport';
import * as L from 'leaflet';

@Component({
  selector: 'app-update-transport',
  templateUrl: './update-transport.component.html',
  styleUrls: ['./update-transport.component.css']
})
export class UpdateTransportComponent implements OnInit, AfterViewInit, OnDestroy {
  transportForm: FormGroup;
  id_transport!: number;
  map!: L.Map;
  marker!: L.Marker;

  constructor(
    private transportService: TransportService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.transportForm = this.formBuilder.group({
      route: ['', Validators.required],
      description: ['', Validators.required],
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

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    this.map.remove();
  }

  getTransportDetails(id_transport: number): void {
    this.transportService.getTransportById(id_transport).subscribe((data: Transport) => {
        this.transportForm.patchValue({
            route: data.route,
            description: data.description,
            startLocation_longitude: +data.startLocation_longitude, // Convert to number
            startLocation_latitude: +data.startLocation_latitude, // Convert to number
            endLocation_longitude: +data.endLocation_longitude, // Convert to number
            endLocation_latitude: +data.endLocation_latitude // Convert to number
        });

        // Update the map with the new coordinates
        this.updateMap(+data.startLocation_latitude, +data.startLocation_longitude);
        this.updateMap(+data.endLocation_latitude, +data.startLocation_longitude);
    });
}

  initMap(): void {
    this.map = L.map('map').setView([34.0000, 9.0000], 8); // Centrer la carte sur le monde entier

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 15,
    }).addTo(this.map);

    this.map.on('click', (e) => {
      this.updateMap(e.latlng.lat, e.latlng.lng);
      this.transportForm.patchValue({
        startLocation_latitude: e.latlng.lat,
        startLocation_longitude: e.latlng.lng
      });
    });
  }

  updateMap(latitude: number, longitude: number): void {
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }
    this.marker = L.marker([latitude, longitude]).addTo(this.map);
  }

  saveTransport(): void {
    if (this.transportForm.valid) {
      this.transportService.updateTransport(this.id_transport, this.transportForm.value).subscribe({
        next: (res) => {
          console.log(res);
          alert('Transport updated successfully!');
          this.router.navigate(['/admin/listtransport']); // Redirection vers la liste des transports
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