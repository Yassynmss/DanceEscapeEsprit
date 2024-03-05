// add-equipment.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Import Validators
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {
  equipmentForm!: FormGroup;

  constructor(private equipmentService: EquipmentServiceService) { }

  ngOnInit(): void {
    this.equipmentForm = new FormGroup({
      name_equipment: new FormControl('', Validators.required), 
      quantity: new FormControl('', Validators.required), 
      etat: new FormControl('', Validators.required) 
    });
  }

  saveEquipment(): void {
    if (this.equipmentForm.valid) { 
      this.equipmentService.addEquipment(this.equipmentForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (e) => console.error(e)
        });
    } else {
      console.log('Le formulaire n\'est pas valide');
    }
  }
}
