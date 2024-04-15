import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DanceCategorie } from '../core/dancecategorie';
import { ActivatedRoute, Router } from '@angular/router';
import { DanceService } from '../Services/danceManagement/dance.service';

@Component({
  selector: 'app-danceupdate',
  templateUrl: './danceupdate.component.html',
  styleUrls: ['./danceupdate.component.css']
})
export class DanceupdateComponent implements OnInit {
  danceForm!: FormGroup;
  editingDance: DanceCategorie | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private danceService: DanceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.danceForm = this.formBuilder.group({
      creation_date: ['', Validators.required],
      description_dance: ['', Validators.required],
      music_title: ['', Validators.required],
      name_dance_creation: ['', Validators.required],
      dancestyle: ['', Validators.required]
    });

    // Retrieve the ID of the dance from the URL
    const danceId = Number(this.route.snapshot.paramMap.get('id'));

    // Retrieve the details of the dance from the ID
    this.danceService.getDanceCategoryById(danceId).subscribe(
      (dance: DanceCategorie) => {
        // Pre-fill the form with the details of the dance
        this.editingDance = dance;
        this.danceForm.patchValue({
          creation_date: dance.creation_date,
          description_dance: dance.description_dance,
          music_title: dance.music_title,
          name_dance_creation: dance.name_dance_creation,
          dancestyle: dance.dancestyle
        });
      },
      (error) => {
        console.error('Error retrieving dance details:', error);
      }
    );
  }

  updateDance(): void {
    if (this.danceForm.valid && this.editingDance) {
      const updatedDance: DanceCategorie = {
        ...this.editingDance,
        ...this.danceForm.value
      };

      this.danceService.updateDanceCategory(updatedDance).subscribe(
        () => {
          console.log('Dance updated successfully');
          this.router.navigate(['/dances']); // Redirect to the list of dances after the update
        },
        (error) => {
          console.error('Error updating dance:', error);
        }
      );
    }
  }
}
