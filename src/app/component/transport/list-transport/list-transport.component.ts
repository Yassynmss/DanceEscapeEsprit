import { Component, OnInit } from '@angular/core';
import { Transport } from 'src/app/core/models/transport/transport';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-list-transport',
  templateUrl: './list-transport.component.html',
  styleUrls: ['./list-transport.component.css']
})
export class ListTransportComponent implements OnInit {
  transports: Transport[] = [];

  constructor(private transportService: TransportService) { }

  ngOnInit(): void {
    this.loadTransports();
  }

  loadTransports() {
    this.transportService.getAllTransports().subscribe(
      (data: Transport[]) => {
        this.transports = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
