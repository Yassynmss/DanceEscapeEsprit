import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Transport } from 'src/app/core/models/transport/transport';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';

@Component({
  selector: 'app-list-transport',
  templateUrl: './list-transport.component.html',
  styleUrls: ['./list-transport.component.css']
})
export class ListTransportComponent implements OnInit, AfterViewInit {
  transports: Transport[] = [];

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.retrieveTransports();
  }

  ngAfterViewInit(): void {
    this.initializeMaps();
  }

  retrieveTransports(): void {
    this.transportService.getAllTransports()
      .subscribe(
        data => {
          this.transports = data;
          console.log(data);
          this.initializeMaps(); // Initialize maps after retrieving transports
        },
        error => console.error(error)
      );
  }

  initializeMaps(): void {
    this.transports.forEach(transport => {
      const map = L.map(`map-${transport.id_transport}`).setView(
        [parseFloat(transport.startLocation_latitude), parseFloat(transport.startLocation_longitude)],
        13
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.Routing.control({
        waypoints: [
          L.latLng(parseFloat(transport.startLocation_latitude), parseFloat(transport.startLocation_longitude)),
          L.latLng(parseFloat(transport.endLocation_latitude), parseFloat(transport.endLocation_longitude))
        ],
        routeWhileDragging: true
      }).addTo(map);
    });
  }

  removeTransport(transport: Transport): void {
    if (transport.id_transport) {
      this.transportService.deleteTransport(transport.id_transport)
        .subscribe(
          () => {
            console.log('Transport deleted successfully');
            this.retrieveTransports();
          },
          error => console.error(error)
        );
    }
  }
}
