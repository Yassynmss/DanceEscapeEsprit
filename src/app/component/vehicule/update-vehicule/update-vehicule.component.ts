import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehiculeService } from 'src/app/core/services/VehiculeService/vehicule-service.service';
import { Vehicule } from 'src/app/core/models/vehicule/vehicule';

@Component({
  selector: 'app-update-vehicule',
  templateUrl: './update-vehicule.component.html',
  styleUrls: ['./update-vehicule.component.css']
})
export class UpdateVehiculeComponent implements OnInit {
  vehiculeForm: FormGroup;
  id_vehicule!: number;

  constructor(private vehiculeService: VehiculeService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.vehiculeForm = this.formBuilder.group({
      name_vehicule: ['', Validators.required],
      matricule: ['', Validators.required],
      type: ['', Validators.required],
      etat: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id_vehicule = +params['id_vehicule']; // 'id' should match the parameter name in your route
      this.getVehiculeDetails(this.id_vehicule);
    });
  }

  getVehiculeDetails(id_vehicule: number): void {
    this.vehiculeService.getVehiculeById(id_vehicule).subscribe((data: Vehicule) => {
      this.vehiculeForm.patchValue({
        name_vehicule: data.name_vehicule,
        matricule: data.matricule,
        type: data.type,
        etat: data.etat
      });
    });
  }

  saveVehicule(): void {
    if (this.vehiculeForm.valid) {
      this.vehiculeService.updateVehicule(this.id_vehicule, this.vehiculeForm.value).subscribe({
        next: (res) => {
          console.log(res);
          alert('Vehicule updated successfully!');
        },
        error: (e) => {
          console.error(e);
          alert('There was an error updating the vehicle. Please try again.');
        }
      });
    } else {
      alert('The form is not valid. Please check all fields and try again.');
    }
  }
}
