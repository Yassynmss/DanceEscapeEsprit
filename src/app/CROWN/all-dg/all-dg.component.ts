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
  filteredGroups: DancersGroup[] = []; // Groupes filtrés
  pageSize = 10; // Nombre d'éléments par page
  currentPage = 1; // Page actuelle
  totalItems = 0; 
  searchName: string = ''; // Critère de recherche pour le nom du groupe
  searchDescription: string = ''; // Critère de recherche pour la description du groupe

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getGroupsPage();
  }

  getGroupsPage(): void {
    this.http.get<DancersGroup[]>('http://localhost:8080/DancersGroup/alldg').subscribe(
      (data) => {
        this.groups = data;
        this.filterGroups(); // Appliquer le filtrage initial
      },
      (error) => {
        console.error('Erreur lors de la récupération des groupes de danseurs : ', error);
      }
    );
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.filterGroups(); // Réappliquer le filtrage lors du changement de page
  }

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredGroups);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Groups');

    /* Sauvegarder le fichier */
    XLSX.writeFile(wb, 'groups.xlsx');
  }

  filterGroups(): void {
    // Appliquer les filtres
    this.filteredGroups = this.groups.filter(group => {
      const nameMatch = group.groupName.toLowerCase().includes(this.searchName.toLowerCase());
      const descriptionMatch = group.groupDescription.toLowerCase().includes(this.searchDescription.toLowerCase());
      return nameMatch && descriptionMatch;
    });

    // Mettre à jour le nombre total d'éléments après filtrage
    this.totalItems = this.filteredGroups.length;

    // Appliquer la pagination sur les groupes filtrés
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredGroups = this.filteredGroups.slice(startIndex, endIndex);
  }
}
