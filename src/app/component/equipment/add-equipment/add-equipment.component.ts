
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Equipment } from 'src/app/core/models/equipment/equipment';
import { EquipmentServiceService } from 'src/app/core/services/EquipmentService/Equipment-service.service';
import { Logistic } from 'src/app/core/models/logistic/logistic';
import { LogisticService } from 'src/app/core/services/LogisticService/logistic-service.service';
@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {
  equipmentForm!: FormGroup;
  conditions = ['New', 'Like New', 'Good', 'Fair', 'Poor', 'Not Working']; 
  logistics: Logistic[] = [];
  constructor(private equipmentService: EquipmentServiceService  ,private logisticService: LogisticService) { }
 
  ngOnInit(): void {
    this.logisticService.getAllLogistics().subscribe(logistics => {
      this.logistics = logistics;
    });
    
    this.equipmentForm = new FormGroup({
      name_equipment: new FormControl('', Validators.required), 
      quantity: new FormControl('', Validators.required), 
      etat: new FormControl(this.conditions[0], Validators.required),
      id_logistic: new FormControl('', Validators.required)
    });

  }

  saveEquipment(): void {
    if (this.equipmentForm.valid) { 
      this.equipmentService.addEquipment(this.equipmentForm.value,this.equipmentForm.value.id_logistic)
        .subscribe({
          next: (res) => {
            console.log(res);
            alert('Equipment added successfully!');
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
