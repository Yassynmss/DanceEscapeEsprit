import { Component } from '@angular/core';
import { DanceCategorie } from '../core/dancecategorie';
import { DanceService } from '../Services/danceManagement/dance.service';

@Component({
  selector: 'app-dancecategorie',
  templateUrl: './dancecategorie.component.html',
  styleUrls: ['./dancecategorie.component.css']
})
export class DancecategorieComponent {

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
        console.error('An error occurred while fetching dance categories: ', error);
      }
    );
  }

  deleteDanceCategory(id: number): void {
    this.danceService.deleteDanceCategory(id).subscribe(
      (response) => {
        console.log('Dance category with ID ' + id + ' has been deleted');
        // Mettez à jour la liste des catégories de danse après la suppression
        this.getAllDanceCategories();
      },
      (error) => {
        console.error('An error occurred while deleting dance category: ', error);
      }
    );
  }

  

}
