import { Component, OnInit } from '@angular/core';
import { Venue } from '../core/venue';
import { VenueService } from '../Services/venueManagement/venue.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-venue-admin-aziz',
  templateUrl: './venue-admin-aziz.component.html',
  styleUrls: ['./venue-admin-aziz.component.css']
})
export class VenueAdminAzizComponent implements OnInit {
  venues: Venue[] = [];
  updateVenueForm!: FormGroup;
  venue!: Venue;
  editingVenue: Venue | null=null;

  constructor(private venueService: VenueService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadVenues();
    this.initForm(); // Initialisez le formulaire ici
  }

  initForm(): void {
    this.updateVenueForm = this .formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      capacity: ['', Validators.required],
      description: ['', Validators.required],
      longitude: ['', Validators.required],
      altitude: ['', Validators.required]
    });
  }

  loadVenues() {
    this.venueService.getAllVenues().subscribe(
      (data: Venue[]) => {
        this.venues = data;
      },
      (error) => {
        console.log(error);
        // Gérer l'erreur ici
      }
    );
  }

  deleteVenue(id: number): void {
    this.venueService.deleteVenue(id).subscribe(
      () => {
        console.log("Lieu supprimé avec succès");
        // Effectuer d'autres actions si nécessaire après la suppression réussie
      },
      error => {
        console.error("Erreur lors de la suppression du lieu :", error);
        // Gérer l'erreur ici
      }
    );
  }

  updateVenue(){if (this.editingVenue && this.updateVenueForm.valid)
    {const updateEvent:Venue ={...this.editingVenue,...this.updateVenueForm.value}as Venue;
  this.venueService.createVenue(updateEvent).subscribe(()=>{
    this.loadVenues();
    this.updateVenueForm.reset();
    this.editingVenue=null;

  })}
  }

  editVenue(venue: Venue) {
    this.editingVenue = venue;
    this.updateVenueForm.patchValue({
      name: venue.name,
      address: venue.address,
      capacity: venue.capacity,
      description: venue.description,
      longitude: venue.longitude, // Utilisez venue.longitude pour définir la longitude
      altitude: venue.altitude
    });
  }
    


}
