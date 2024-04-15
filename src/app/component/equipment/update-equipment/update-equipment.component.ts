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
  equipmentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private equipmentService: EquipmentServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id_equipment = this.activatedRoute.snapshot.params['id_equipment'];
    this.equipmentForm = this.fb.group({
      id_equipment: [id_equipment, [Validators.required]],
      name_equipment: ['', [Validators.required]],
      quantity: [null, Validators.required],
      etat: ['', Validators.required],
    });
    this.getEquipmentById(id_equipment);
  }

  getEquipmentById(id_equipment: number) {
    this.equipmentService.getEquipmentById(id_equipment).subscribe((res) => {
      this.equipmentForm.patchValue(res);
    });
  }

  updateEquipment() {
    if (this.equipmentForm.valid) {
      const id_equipment = this.equipmentForm.get('id_equipment')?.value;
      this.equipmentService.updateEquipmentwaw(id_equipment, this.equipmentForm.value).subscribe(
        () => {
          alert('Update done');
          this.router.navigate(['/list-equipment']);
        },
        (error) => {
          console.error('Error updating equipment:', error);
          alert('Update failed');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }
}
