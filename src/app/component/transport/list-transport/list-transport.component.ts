import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/core/services/TransportService/transport-service.service';
import { Transport } from 'src/app/core/models/transport/transport';

@Component({
  selector: 'app-list-transport',
  templateUrl: './list-transport.component.html',
  styleUrls: ['./list-transport.component.css']
})
export class ListTransportComponent implements OnInit {
  transports: Transport[] = [];

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.retrieveTransports();
  }

  retrieveTransports(): void {
    this.transportService.getAllTransports()
      .subscribe(
        data => {
          this.transports = data;
          console.log(data);
        },
        error => console.error(error)
      );
  }

  removeTransport(transport: Transport): void {
    if (transport.id_transport) {
      this.transportService.deleteTransport(transport.id_transport)
        .subscribe(
          () => {
            console.log('Transport deleted successfully');
            this.retrieveTransports();
          },
          error => console.error(error)
        );
    }
  }
}
