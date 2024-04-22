import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Venue } from '../core/venue';
import { VenueService } from '../Services/venueManagement/venue.service';

@Component({
  selector: 'app-venue-update-admin',
  templateUrl: './venue-update-admin.component.html',
  styleUrls: ['./venue-update-admin.component.css']
})
export class VenueUpdateAdminComponent implements OnInit {
  updateVenueForm!: FormGroup;
  venueId: number | null = null;
  editingVenue: Venue | null = null;

  constructor(
    private route: ActivatedRoute,
    private venueService: VenueService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getVenueIdFromRoute();
    this.loadVenueDetails();
  }

  initForm(): void {
    this.updateVenueForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      capacity: ['', Validators.required],
      description: ['', Validators.required],
      longitude: ['', Validators.required],
      altitude: ['', Validators.required]
    });
  }

  getVenueIdFromRoute(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id_venue');
      this.venueId = id ? parseInt(id, 10) : null;
    });
  }

  loadVenueDetails(): void {
    if (this.venueId !== null) {
      this.venueService.getVenueById(this.venueId).subscribe(
        (venue: Venue) => {
          this.editingVenue = venue;
          this.updateFormWithVenueDetails();
        },
        (error) => {
          console.error('Error retrieving venue details:', error);
        }
      );
    }
  }

  updateFormWithVenueDetails(): void {
    if (this.editingVenue) {
      this.updateVenueForm.patchValue({
        name: this.editingVenue.name,
        address: this.editingVenue.address,
        capacity: this.editingVenue.capacity,
        description: this.editingVenue.description,
        longitude: this.editingVenue.longitude,
        altitude: this.editingVenue.altitude
      });
    }
  }

  updateVenue(): void {
    if (this.editingVenue && this.updateVenueForm.valid) {
      const updatedVenue: Venue = {
        ...this.editingVenue,
        ...this.updateVenueForm.value
      };

      this.venueService.updateVenue(this.editingVenue.id_venue, updatedVenue).subscribe(
        () => {
          console.log('Venue updated successfully');
          // Effectuer des actions supplémentaires si nécessaire après la mise à jour réussie
        },
        (error) => {
          console.error('Error updating venue:', error);
        }
      );
    }
  }
}
