import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Transport } from 'src/app/core/models/transport/transport';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Staff } from 'src/app/core/models/staff/staff';
import { StaffService } from 'src/app/Services/staff.service';
import { Equipment } from 'src/app/core/models/equipment/equipment';
import { EquipmentService } from 'src/app/Services/equipment.service';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-listtransport',
  templateUrl: './listtransport.component.html',
  styleUrls: ['./listtransport.component.css']
})
export class ListTransportComponent implements OnInit, AfterViewInit {
  transports: Transport[] = [];
  staffs: Staff[] = [];
  id_staff: number | null = null;
  equipmentsById: { [id_transport: number]: Equipment[] } = {};
  unassignedDrivers: Staff[] = [];
  availableEquipments: Equipment[] = [];
  driverName: { [id_transport: number]: Staff[] } = {};

  constructor(private transportService: TransportService, private staffService: StaffService,
              private router: Router, private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.staffService.getUnassignedDrivers().subscribe(unassignedDrivers => {
      this.unassignedDrivers = unassignedDrivers;
    });

    this.fetchAllEquipments();

    this.staffService.getAllDrivers().subscribe(staffs => {
      this.staffs = staffs;
    });

    this.transportService.getAllTransports().subscribe(transports => {
      this.transports = transports;
      this.fetchEquipmentsForTransports();
    });

    this.transportService.getAllTransports().subscribe(transports => {
      this.transports = transports.map(transport => ({
        ...transport,
        driverName: transport.driver ? transport.driver.name : 'No driver'
      }));
      this.fetchEquipmentsForTransports();
    });
  }    

  fetchEquipmentsForTransports(): void {
    for (const transport of this.transports) {
      this.transportService.getEquipmentsForTransport(transport.id_transport)
        .subscribe(
          equipments => {
            this.equipmentsById[transport.id_transport] = equipments;
          },
          error => {
            console.error('Error fetching equipments for transport:', transport.id_transport, error);
          }
        );
    }
  }

  fetchAllEquipments(): void {
    this.equipmentService.getAllEquipments()
      .subscribe(
        equipments => {
          this.availableEquipments = equipments;
        },
        error => {
          console.error('Error fetching all equipments:', error);
        }
      );
  }

  initializeMapForTransport(transport: Transport): void {
    try {
      const latitudeDeparture = parseFloat(transport.startLocation_latitude);
      const longitudeDeparture = parseFloat(transport.startLocation_longitude);
      const latitudeDestination = parseFloat(transport.endLocation_latitude);
      const longitudeDestination = parseFloat(transport.endLocation_longitude);

      if (isNaN(latitudeDeparture) || isNaN(longitudeDeparture) || isNaN(latitudeDestination) || isNaN(longitudeDestination)) {
        console.error('Invalid coordinates for transport:', transport.id_transport);
        return;
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

      const depMarker = L.marker([latitudeDeparture, longitudeDeparture]).addTo(map);
      const destMarker = L.marker([latitudeDestination, longitudeDestination]).addTo(map);

      depMarker.bindPopup('Departure Location').openPopup();
      destMarker.bindPopup('Destination Location').openPopup();

      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(latitudeDeparture, longitudeDeparture),
          L.latLng(latitudeDestination, longitudeDestination)
        ],
        routeWhileDragging: false,
        router: new L.Routing.OSRMv1({
          serviceUrl: 'https://router.project-osrm.org/route/v1'
        }),
        formatter: new L.Routing.Formatter(),
        addWaypoints: false
      });

      routingControl.addTo(map);

      const routeInstructionsContainer = routingControl.getContainer();
      if (routeInstructionsContainer) {
        routeInstructionsContainer.style.display = 'none';
      }
    } catch (error) {
      console.error('Error initializing map for transport', transport.id_transport, ':', error);
    }
  }

  removeTransport(transport: Transport): void {
    // Implémentez la logique pour supprimer le transport
    if (transport.id_transport) {
      this.transportService.deleteTransport(transport.id_transport).subscribe(
        () => {
          console.log('Transport deleted successfully');
          this.retrieveTransports();
        },
        error => console.error(error)
      );
    }
  }

  private retrieveTransports(): void {
    this.transportService.getAllTransports().subscribe(
      data => {
        this.transports = data;
      },
      error => console.error(error)
    );
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

  assignDriverToTransport(transport: Transport, id_staff: number): void {
    if (this.id_staff) {
      this.transportService.assignDriverToTransport(transport.id_transport, this.id_staff)
        .subscribe(
          () => {
            console.log('Driver assigned successfully');
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/admin/listtransport']); 
            }); 
          },
          error => console.error(error)
        );
    } else {
      console.error('No driver selected');
    }
  }

  ngAfterViewInit(): void {
    this.transports.forEach(transport => this.initializeMapForTransport(transport));
  }
  downloadTransport(transport: Transport, equipments: Equipment[], driverName: string): void {
    const doc = new jsPDF();
  
    doc.text(`Route: ${transport.route}`, 10, 20);
    doc.text(`Description: ${transport.description}`, 10, 30);
    doc.text(`Start Location: ${transport.startLocation_latitude}, ${transport.startLocation_longitude}`, 10, 40);
    doc.text(`End Location: ${transport.endLocation_latitude}, ${transport.endLocation_longitude}`, 10, 50);
  
    // Informations sur les équipements
    doc.text('Equipments:', 10, 70);
    equipments.forEach((equipment, index) => {
      doc.text(`${index + 1}. ${equipment.name_equipment}`, 20, 80 + index * 10);
    });
  
    // Informations sur le conducteur
    doc.text(`Driver: ${driverName || 'No driver'}`, 10, 110 + equipments.length * 10);
  
    doc.save(`transport_${transport.id_transport}.pdf`);
  }
  
  removeEquipmentFromTransport(transport: Transport, equipment: Equipment): void {
    if (transport.id_transport && equipment.id_equipment) {
      this.transportService.deleteEquipmentFromTransport(transport.id_transport, equipment.id_equipment)
        .subscribe(
          () => {
            console.log('Equipment removed from transport successfully');
            // Actualiser la liste des équipements après la suppression
            this.fetchEquipmentsForTransports();
          },
          error => console.error(error)
        );
    } else {
      console.error('Invalid transport ID or equipment ID');
    }
  }
  
}