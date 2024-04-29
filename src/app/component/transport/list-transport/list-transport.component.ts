
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Transport } from 'src/app/core/models/transport/transport';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Staff } from 'src/app/core/models/staff/staff';
import { StaffService } from 'src/app/core/services/StaffService/staff-service.service';
import { Job } from 'src/app/core/models/staff/staff';

import { Equipment } from 'src/app/core/models/equipment/equipment';
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';
import { Router } from '@angular/router';
import { AddEquipmentDialogComponent } from '../add-equipment-dialog/add-equipment-dialog.component';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-list-transport',
  templateUrl: './list-transport.component.html',
  styleUrls: ['./list-transport.component.css']
})
export class ListTransportComponent implements OnInit, AfterViewInit {
  transports: Transport[] = [];
  staffs: Staff[] = [];
  id_staff: number | null = null;
  selectedStaff = {id_staff: ''};
  unassignedDrivers: Staff[] = [];
  availableEquipments: Equipment[] = [];
  selectedEquipments: Equipment[] = [];

  staffsById: { [id_staff: number]: Staff } = {};
  equipmentsById: { [id_transport: number]: Equipment[] } = {};

  constructor(private transportService: TransportService, private staffService: StaffService,private router: Router,private equipmentService:EquipmentServiceService) { }

  ngOnInit() {

    this.staffService.getUnassignedDrivers().subscribe(unassignedDrivers => {
      this.unassignedDrivers = unassignedDrivers;

    })
    
    
    
    ;
    

    this.staffService.getAllDrivers().subscribe(staffs => {
      this.staffs = staffs;
    })
    
    ;
    
    this.transportService.getAllTransports().subscribe(transports => {
      this.transports = transports;

      for (const transport of this.transports) {
        this.transportService.getEquipmentsForTransport(transport.id_transport).subscribe(equipments => {
          this.equipmentsById[transport.id_transport] = equipments;
        });
      }
    });

   /* this.retrieveDrivers(); */
    this.retrieveTransports();

    this.equipmentService.getAllEquipments().subscribe(equipments => {
      this.availableEquipments = equipments;
    });
  }


  downloadTransport(transport: Transport): void {
    const doc = new jsPDF();

    doc.text(`Transport ID: ${transport.id_transport}`, 10, 10);
    doc.text(`Route: ${transport.route}`, 10, 20);
    doc.text(`Description: ${transport.description}`, 10, 30);
    doc.text(`Start Location: ${transport.startLocation_latitude}, ${transport.startLocation_longitude}`, 10, 40);
    doc.text(`End Location: ${transport.endLocation_latitude}, ${transport.endLocation_longitude}`, 10, 50);
    if (transport.id_staff ) {
      doc.text(`Driver: ${this.staffs}`, 10, 60);
    }

    // Add equipment information
    if (transport.equipments && transport.equipments.length > 0) {
      let y = 70;
      for (const equipment of transport.equipments) {
        doc.text(`Equipment: ${equipment.name_equipment}, Quantity: ${equipment.quantity}`, 10, y);
        y += 10;
      }
    }

    doc.save(`transport_${transport.id_transport}.pdf`);
  }

  goToAddEquipmentPage(transports: Transport): void {
    this.router.navigate(['/add-equipment/', transports.id_transport]);
  }
  
/*
  retrieveDrivers(): void {
    this.staffService.getAllDrivers()
      .subscribe(
        (data: Staff[]) => {
          this.staffs = data; 
        },
        error => console.error(error)
      );
  }
 */





 
assignDriverToTransport(transport: Transport, id_staff: number): void {
  if (this.id_staff) {
    this.transportService.assignDriverToTransport(transport.id_transport, this.id_staff)
      .subscribe(
        () => {
          console.log('Driver assigned successfully');
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/admin/listtransport']); // Naviguer à nouveau vers le même composant
          }); 
        },
        error => console.error(error)
      );
  } else {
    console.error('No driver selected');
  }
}
  








  ngAfterViewInit(): void {
    this.initializeMaps();
  }

  retrieveTransports(): void {
    this.transportService.getAllTransports()
      .subscribe(
        data => {
          this.transports = data;
        },
        error => console.error(error)
      );
  }

  async initializeMaps(): Promise<void> {
    try {
      for (const transport of this.transports) {
        const latitudeDeparture = parseFloat(transport.startLocation_latitude);
        const longitudeDeparture = parseFloat(transport.startLocation_longitude);
        const latitudeDestination = parseFloat(transport.endLocation_latitude);
        const longitudeDestination = parseFloat(transport.endLocation_longitude);

        // Check if the coordinates are valid numbers
        if (isNaN(latitudeDeparture) || isNaN(longitudeDeparture) || isNaN(latitudeDestination) || isNaN(longitudeDestination)) {
          console.error('Invalid coordinates for transport:', transport.id_transport);
          continue;  // Skip this transport and continue with the next one
        }

        const mapId = 'map-' + transport.id_transport;
        const map = L.map(mapId, {
          center: [latitudeDeparture, longitudeDeparture],
          zoom: 15
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Fetch location names asynchronously
        const departureLocation = L.latLng(latitudeDeparture, longitudeDeparture);
        const destinationLocation = L.latLng(latitudeDestination, longitudeDestination);

        const departureName = await this.getLocationName(departureLocation);
        const destinationName = await this.getLocationName(destinationLocation);

        // Create custom icons for departure and destination markers
        const depIcon = L.icon({
          iconUrl: '/assets/backOffice/img/dep.png',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          popupAnchor: [0, -16]
        });

        const destIcon = L.icon({
          iconUrl: '/assets/backOffice/img/dest.png',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          popupAnchor: [0, -16]
        });

        // Add markers with custom icons and tooltips
        L.marker([latitudeDeparture, longitudeDeparture], { icon: depIcon })
          .addTo(map)
          .bindPopup('Departure Location')
          .bindTooltip(departureName, { direction: 'top', permanent: true })
          .openTooltip();

        // Add destination marker with custom icon and tooltip
        L.marker([latitudeDestination, longitudeDestination], { icon: destIcon })
          .addTo(map)
          .bindPopup('Destination Location')
          .bindTooltip(destinationName, { direction: 'top', permanent: true })  // Ensure destination name is bound
          .openTooltip();

        // Create a routing control
        const routingControl = L.Routing.control({
          waypoints: [
            L.latLng(latitudeDeparture, longitudeDeparture),
            L.latLng(latitudeDestination, longitudeDestination)
          ],
          routeWhileDragging: false,
          geocoder: (<any>L.Control).Geocoder.nominatim(),
          router: new L.Routing.OSRMv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1'
          }),
          formatter: new L.Routing.Formatter(),
          addWaypoints: false
        });

        // Add the routing control to the map
        routingControl.addTo(map);

        // Hide the route instructions control from the map
        const routeInstructionsContainer = routingControl.getContainer();
        if (routeInstructionsContainer) {
          routeInstructionsContainer.style.display = 'none';
        }
      }
    } catch (error) {
      console.error('Error initializing maps:', error);
    }
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

  private async getLocationName(location: L.LatLng): Promise<string> {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${location.lat}&lon=${location.lng}&format=json`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.display_name) {
        return data.display_name;
      } else {
        return 'Location Name Not Found';
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
      throw error;
    }
  }

  
}