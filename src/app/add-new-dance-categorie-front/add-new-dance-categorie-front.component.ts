import { Component } from '@angular/core';
import { DanceService } from '../Services/danceManagement/dance.service';
import { DanceCategorie } from '../core/dancecategorie';
import { Dance_style } from '../core/enumdance';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-dance-categorie-front',
  templateUrl: './add-new-dance-categorie-front.component.html',
  styleUrls: ['./add-new-dance-categorie-front.component.css']
})
export class AddNewDanceCategorieFrontComponent {

  danceForm!: FormGroup;
  editingdance: Event | null = null;
  constructor(private fb: FormBuilder, private danceService:DanceService) { }

  ngOnInit(): void {
    this.danceForm = this.fb.group({
      description_dance: ['', Validators.required],
      music_title: ['', Validators.required],
      name_dance_creation: ['', Validators.required],
      dancestyle: ['', Validators.required]
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
