

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Transport } from 'src/app/core/models/transport/transport';
import { Logistic } from 'src/app/core/models/logistic/logistic';
import { LogisticService } from 'src/app/Services/logistic.service';
import * as L from 'leaflet';
import 'leaflet-search';
import { EquipmentService } from 'src/app/Services/equipment.service';
import { Equipment } from 'src/app/core/models/equipment/equipment';
import { mergeMap } from 'rxjs/operators';
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
  availableEquipments: Equipment[] = [];
  selectedEquipments: Equipment[] = [];
  constructor(private transportService: TransportService, private formBuilder: FormBuilder, private logisticService: LogisticService,private equipmentService:EquipmentService) { }

  ngOnInit(): void {
    this.logisticService.getAllLogistics().subscribe(logistics => {
      this.logistics = logistics;
      }); 
      this.equipmentService.getAllEquipments().subscribe(equipments => {
        this.availableEquipments = equipments;
  });
   

    this.transportForm = this.formBuilder.group({
      route: ['', Validators.required],
      description: ['', Validators.required],
      startLocation_longitude: ['', Validators.required],
      startLocation_latitude: ['', Validators.required],
      endLocation_longitude: ['', Validators.required],
      endLocation_latitude: ['', Validators.required],
      id_logistic: ['', Validators.required],
      equipments: this.formBuilder.array([])
    });
  }
  addToSelected(equipment: Equipment): void {
    this.selectedEquipments.push(equipment);
    this.availableEquipments = this.availableEquipments.filter(e => e !== equipment);
    this.updateEquipmentsFormValue();
  }

  removeFromSelected(equipment: Equipment): void {
    this.availableEquipments.push(equipment);
    this.selectedEquipments = this.selectedEquipments.filter(e => e !== equipment);
    this.updateEquipmentsFormValue();
  }

  private updateEquipmentsFormValue(): void {
    const equipmentsControl = this.transportForm.get('equipments');
    if (equipmentsControl) {
      equipmentsControl.setValue(this.selectedEquipments.map(equipment => equipment.id_equipment));
    } else {
      console.error('The form control "equipments" does not exist.');
    }
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
      this.transportService.addTransport(this.transportForm.value, this.transportForm.value.id_logistic)
        .pipe(
          mergeMap((res: Transport) => {
            console.log(res);
            alert('Transport added successfully!');
            // After adding the transport, add the equipments
            return this.transportService.addEquipmentsToTransport(res.id_transport, this.transportForm.value.equipments);
          })
        )
        .subscribe({
          next: () => {
            console.log('Equipments added successfully');
            this.transportForm.reset(); // Reset the form after successful addition
          },
          error: (e) => {
            console.error(e);
            alert('There was an error adding the transport or the equipments. Please check the form for any missing or incorrect information.');
          }
        });
    } else {
      alert('The form is not valid. Please check all fields and try again.');
    }
  }}


