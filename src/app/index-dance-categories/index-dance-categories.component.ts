import { Component, OnInit } from '@angular/core';
import { DanceCategorie } from '../core/dancecategorie';
import { DanceService } from '../Services/danceManagement/dance.service';

@Component({
  selector: 'app-index-dance-categories',
  templateUrl: './index-dance-categories.component.html',
  styleUrls: ['./index-dance-categories.component.css']
})
export class IndexDanceCategoriesComponent implements OnInit{

  danceCategories: DanceCategorie[] = [];

  constructor(private danceService: DanceService) { }

  ngOnInit(): void {
    this.getAllDanceCategories();
  }

  getAllDanceCategories(): void {
    this.danceService.getAllDanceCategories().subscribe(
      (data: DanceCategorie[]) => {
        this.danceCategories = data;
      },
      (error) => {
        console.log('Une erreur s\'est produite lors du chargement des catégories de danse :', error);
      }
    );
  }

}
