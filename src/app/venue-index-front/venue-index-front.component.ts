import { Component } from '@angular/core';
import { Venue } from '../core/venue';
import { VenueService } from '../Services/venueManagement/venue.service';

@Component({
  selector: 'app-venue-index-front',
  templateUrl: './venue-index-front.component.html',
  styleUrls: ['./venue-index-front.component.css']
})

export class VenueIndexFrontComponent {

  venues: Venue[] = [];

  constructor(private venueService: VenueService) { }

  ngOnInit(): void {
    this.loadVenues();
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


 

}
