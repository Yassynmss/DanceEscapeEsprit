import { Component, OnInit } from '@angular/core';
import { VehiculeService } from 'src/app/core/services/VehiculeService/vehicule-service.service';
import { Vehicule } from 'src/app/core/models/vehicule/vehicule';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListVehiculeComponent implements OnInit {
[x: string]: any;
  vehicules: Vehicule[] = [];

  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit() {
    this.retrieveVehicules();
  }

  retrieveVehicules(): void {
    this.vehiculeService.getAllVehicules()
      .subscribe(
        data => {
          this.vehicules = data;
          console.log(data);
        },
        error => console.error(error)
      );
  }

  removeVehicule(vehicule: Vehicule): void {
    if (vehicule.id_vehicule) {
      this.vehiculeService.deleteVehicule(vehicule.id_vehicule)
        .subscribe(
          () => {
            console.log('Vehicule deleted successfully');
            this.retrieveVehicules();
          },
          error => console.error(error)
        );
    }
  }

  sortByID(): void {
    this.vehicules.sort((a, b) => a.id_vehicule - b.id_vehicule);
  }

  sortByName(): void {
    this.vehicules.sort((a, b) => a.name_vehicule.localeCompare(b.name_vehicule));
  }
}
