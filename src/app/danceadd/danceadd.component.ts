import { Component, OnInit } from '@angular/core';
import { DanceCategorie } from '../core/dancecategorie';
import { DanceService } from '../Services/danceManagement/dance.service';
import { FormBuilder,FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-danceadd',
  templateUrl: './danceadd.component.html',
  styleUrls: ['./danceadd.component.css']
})
export class DanceaddComponent implements OnInit {
  

  danceForm!: FormGroup;
  editingdance: Event | null = null;
  constructor(private fb: FormBuilder, private danceService:DanceService) { }

  ngOnInit(): void {
    this.danceForm = this.fb.group({
      description_dance: ['', Validators.required],
      music_title: ['', Validators.required],
      name_dance_creation: ['', Validators.required],
      dancestyle: ['', Validators.required],
      creation_date: ['', Validators.required]
    });

      
    }


    submitForm(): void {
      if (this.danceForm.valid) {
        const danceData: DanceCategorie = this.danceForm.value;
        this.danceService.addDanceCategorie(danceData).subscribe(
          (data: DanceCategorie) => {
            console.log('Catégorie de danse ajoutée avec succès: ', data);
            
            this.danceForm.reset();
          },
          (error) => {
            console.error('Une erreur s\'est produite lors de l\'ajout de la catégorie de danse: ', error);
          }
        );
      } else {
        
      }
    }
  }
  

    
  

  

  


