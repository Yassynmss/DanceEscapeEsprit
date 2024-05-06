import { Component, OnInit } from '@angular/core';
import { VehiculeService } from 'src/app/core/services/VehiculeService/vehicule-service.service';
import { Vehicule } from 'src/app/core/models/vehicule/vehicule';
import { Transport } from 'src/app/core/models/transport/transport';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListVehiculeComponent implements OnInit {
[x: string]: any;
  vehicules: Vehicule[] = [];
  transports: Transport[] = [];
  searchTerm$ = new Subject<void>();
  name_vehicule : string | null = null;
  etat: string | null = null;
  matricule: string | null = null;
  selectedType: string | null = null; 
  type: string[] = ['BUS', 'TRACK', 'CAR', 'MOTORBIKE'];
  constructor(private vehiculeService: VehiculeService , private transportService: TransportService,private router: Router) { }

  ngOnInit(): void {
    this.transportService.getAllTransports().subscribe((transports: Transport[]) => {
      this.transports = transports;
    });
    
    this.retrieveVehicules();


    this.searchTerm$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(() => {
      this.searchVehicule();
    });
    this.searchTerm$.next();
  }
  searchVehicule(): void {
    this.vehiculeService.searchVehicule(this.name_vehicule || undefined, this.etat || undefined, this.matricule || undefined, this.selectedType || undefined)
      .subscribe(
        data => {
          this.vehicules = data;
          console.log(data);
        },
        error => console.error(error)
      );
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

  assignToTransport(vehicle: Vehicule, id_transport: number): void {
    this.vehiculeService.assignTransportToVehicule(vehicle.id_vehicule, id_transport)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.retrieveVehicules();
        },
        error: (e) => console.error(e)
      });
  }
  
  
}
function debounceTime(arg0: number): import("rxjs").OperatorFunction<void, unknown> {
  throw new Error('Function not implemented.');
}

function distinctUntilChanged(): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}

