import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VenueService } from '../Services/venueManagement/venue.service';
import { Venue } from '../core/venue';

@Component({
  selector: 'app-venue-add-admin',
  templateUrl: './venue-add-admin.component.html',
  styleUrls: ['./venue-add-admin.component.css']
})
export class VenueAddAdminComponent implements OnInit {
  venueForm!: FormGroup;
  editingVenue: Venue | null = null;

  constructor(private fb: FormBuilder, private venueService: VenueService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.venueForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      capacity: ['', Validators.required],
      description: ['', Validators.required],
      longitude: ['', Validators.required],
      altitude: ['', Validators.required]
    });

    // Vérifiez si un lieu est en cours d'édition
    if (this.editingVenue) {
      this.venueForm.patchValue({
        name: this.editingVenue.name,
        address: this.editingVenue.address,
        capacity: this.editingVenue.capacity,
        description: this.editingVenue.description,
        longitude: this.editingVenue.longitude,
        altitude: this.editingVenue.altitude
      });
    }
  }

  onSubmit(): void {
    if (this.venueForm.valid) {
      if (this.editingVenue) {
        this.updateVenue();
      } else {
        this.createVenue();
      }
    }
  }

  createVenue(): void {
    const newVenue: Venue = this.venueForm.value as Venue;
    this.venueService.createVenue(newVenue).subscribe(
      (response: any) => {
        console.log(response);
        // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après l'ajout réussi
        this.venueForm.reset();
      },
      (error) => {
        console.error(error);
        // Gérer l'erreur ici
      }
    );
  }

  updateVenue(): void {
    if (this.editingVenue) {
      const updatedVenue: Venue = { ...this.editingVenue, ...this.venueForm.value };
      this.venueService.updateVenue(this.editingVenue.id_venue, updatedVenue).subscribe(
        (response: any) => {
          console.log(response);
          
          // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après la mise à jour réussie
          this.venueForm.reset();
          this.editingVenue = null;
        },
        (error) => {
          console.error(error);
          // Gérer l'erreur ici
        }
      );
    }
  }

}
