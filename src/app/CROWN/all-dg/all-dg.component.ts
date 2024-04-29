import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DancersGroup } from 'src/app/models/DancersGroup';
import * as XLSX from 'xlsx'; // Importe la bibliothèque xlsx

@Component({
  selector: 'app-all-dg',
  templateUrl: './all-dg.component.html',
  styleUrls: ['./all-dg.component.css']
})
export class AllDGComponent implements OnInit {
  groups: DancersGroup[] = [];
  pageSize = 10; // Nombre d'éléments par page
  currentPage = 1; // Page actuelle
  totalItems = 0; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getGroupsPage();
  }

  getGroupsPage(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    
    // Récupérer uniquement les éléments de la page actuelle
    this.http.get<DancersGroup[]>('http://localhost:8080/DancersGroup/alldg').subscribe(
      (data) => {
        this.groups = data.slice(startIndex, endIndex);
        this.totalItems = data.length;
      },
      (error) => {
        console.error('Erreur lors de la récupération des groupes de danseurs : ', error);
      }
    );
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.getGroupsPage(); // Récupérer les éléments de la nouvelle page
  }

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.groups);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Groups');

    /* Sauvegarder le fichier */
    XLSX.writeFile(wb, 'groups.xlsx');
  }
}
