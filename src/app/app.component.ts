import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'springangular';
  equipmentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.equipmentForm = this.formBuilder.group({
     
      name_equipment: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      quantity: ['', [Validators.required]],
      etat: ['', [Validators.required]]
    });
  }
}
