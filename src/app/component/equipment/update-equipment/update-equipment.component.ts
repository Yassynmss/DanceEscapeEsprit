import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';
import { Equipment } from 'src/app/core/models/equipment/equipment';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css'],
})
export class UpdateEquipmentComponent implements OnInit {
  id_equipment: any;
  equipmentForm!: FormGroup;
  equipment: Equipment = new Equipment();

  constructor(
    private fb: FormBuilder,
    private equipmentService: EquipmentServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_equipment = this.activatedRoute.snapshot.params['id_equipment'];
    this.equipmentForm = this.fb.group({
      name_equipment: [null, [Validators.required]],
      quantity: [null, Validators.required],
      etat: [null, Validators.required],
    });
    this.getEquipmentById();
  }

  getEquipmentById() {
    this.equipmentService.getEquipmentById(this.id_equipment).subscribe((res) => {
      console.log(res);
      this.equipmentForm.patchValue(res);
    });
  }

  updateEquipment() {
    if (this.equipmentForm.valid) {
      this.equipmentService.updateEquipment(this.id_equipment, this.equipmentForm.value).subscribe(
        (res: any) => {
          console.log(res);
        },
        (error) => {
          console.error('Error updating equipment:', error);
        }
      );
      alert('Update done');
    } else {
      alert('Update failed');
    }
  }
}
