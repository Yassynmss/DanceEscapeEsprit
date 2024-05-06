

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculeService } from 'src/app/core/services/VehiculeService/vehicule-service.service';
import { type_vehicule } from 'src/app/core/models/vehicule/vehicule';
import { Transport } from 'src/app/core/models/transport/transport';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {
  vehiculeForm!: FormGroup;
  types = Object.values(type_vehicule); 
 
  constructor(private vehiculeService: VehiculeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.vehiculeForm = this.formBuilder.group({
      name_vehicule: ['', Validators.required], 
      matricule: ['', Validators.required], 
      type: ['', Validators.required],
      etat: ['', Validators.required],
     
    });
  }

  saveVehicule(): void {
    if (this.vehiculeForm.valid) { 
      this.vehiculeService.addVehicule(this.vehiculeForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            alert('Vehicule added successfully!');
          },
          error: (e) => {
            console.error(e);
            alert('There was an error adding the equipment. Please check the form for any missing or incorrect information.');
          }
        });
    } else {
      alert('The form is not valid. Please check all fields and try again.');
    }
  }
}


