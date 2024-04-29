import { Component, ViewChild } from '@angular/core';
import { Participation } from '../core/particpation';
import { ParticipationService } from '../Services/participation.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddParticipationComponent } from '../add-participation/add-participation.component';
import { DialogRef } from '@angular/cdk/dialog';
import {MatPaginator} from '@angular/material/paginator';
 import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EditParticipationComponent } from '../edit-participation/edit-participation.component';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-fetchpart',
  templateUrl: './fetchpart.component.html',
  styleUrls: ['./fetchpart.component.css']
})
export class FetchpartComponent {
  Participations: Participation[] = [];
  filteredParticipations: Participation[] = [];
  searchParticipantCode: string = '';
  dataSource!: MatTableDataSource<Participation>;

  displayedColumns: string[] = ['showtime', 'participantCode', 'totalVotes', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

 // @ViewChild(MatSort) sort! : MatSort;

constructor(private participationService: ParticipationService, private router: Router,private _dialog: MatDialog) {}
ngOnInit(): void {
  this.loadParticipations();

}

/*ngAfterViewInit(): void {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}*/

loadParticipations() {
  this.participationService.fetchParticipationList().subscribe(participations => {
    this.Participations = participations;
    this.filteredParticipations = participations;
    this.dataSource = new MatTableDataSource(participations);
    this.dataSource.paginator = this.paginator;
    this.paginator.length = participations.length; // Update paginator's length property

  });
}


handleParticipationAdded() {
  this.loadParticipations();
}

editParticipation(participation: Participation): void {
  const dialogRef = this._dialog.open(EditParticipationComponent, {
    data: { participation: participation }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.loadParticipations(); // Reload the participation list after editing
    }
  });
}

deleteParticipation(participation: Participation): void {
  this.participationService.deleteParticipationById(participation.id_participation).subscribe({
    next: () => {
      this.loadParticipations(); // Refresh the participation list after deletion
    },
    error: (error) => {
      console.error('Error deleting participation:', error);
    }
  });
}




openForm(){
  const dialogRef = this._dialog.open(AddParticipationComponent);
  dialogRef.componentInstance.participationAdded.subscribe(() => {
    this.loadParticipations(); // Reload the participation list after a new participation is added
  });

}
filterParticipations(): void {
  this.filteredParticipations = this.Participations.filter(participation =>
    participation.participantCode != null && participation.participantCode.toString().includes(this.searchParticipantCode)
  );
  this.paginator.firstPage();
  this.paginator.length = this.filteredParticipations.length; // Update paginator's length property
}


onPageChange(event: PageEvent): void {
  const startIndex = event.pageIndex * event.pageSize;
  const endIndex = Math.min(startIndex + event.pageSize, this.filteredParticipations.length);
  this.filteredParticipations = this.filteredParticipations.slice(startIndex, endIndex);
}





sortParticipationsByTotalVotes() {
  this.Participations.sort((a, b) => b.totalVotes - a.totalVotes);
  this.filteredParticipations = this.Participations.slice(); // Make a copy of the sorted array
  /*if (this.paginator) {
    this.paginator.firstPage();
    this.paginator.length = this.filteredParticipations.length;
  }*/
}
sortByTotalVotesAsc: boolean = false;

toggleSortByTotalVotes() {
  this.sortByTotalVotesAsc = !this.sortByTotalVotesAsc;
  if (this.sortByTotalVotesAsc) {
    this.Participations.sort((a, b) => a.totalVotes - b.totalVotes);
  } else {
    this.Participations.sort((a, b) => b.totalVotes - a.totalVotes);
  }
  this.filteredParticipations = this.Participations.slice(); // Make a copy of the sorted array
 /* if (this.paginator) {
    this.paginator.firstPage();
    this.paginator.length = this.filteredParticipations.length;
  }*/
}


}
