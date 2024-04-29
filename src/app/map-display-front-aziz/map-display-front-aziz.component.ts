import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Venue } from '../core/venue';
import * as L from 'leaflet';
import { Observable, Subscriber } from 'rxjs';

import 'leaflet-control-geocoder'; // Import the geocoder control







@Component({
  selector: 'app-map-display-front-aziz',
  templateUrl: './map-display-front-aziz.component.html',
  styleUrls:['./map-display-front-aziz.component.css'] 
})
export class MapDisplayFrontAzizComponent implements  AfterViewInit {
  private map: any;

  title = "leaf-let";

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map("map").setView([14.094167, -87.206667], 15);

    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    // First search bar


    // Second search bar
    const geocoder1 = (<any>L.Control).geocoder().addTo(this.map);

    // Position the search bars
    const search1 = document.getElementsByClassName('leaflet-control-geocoder leaflet-control') as HTMLCollectionOf<HTMLElement>;
  }
}  
 

 
   

  
  

   





