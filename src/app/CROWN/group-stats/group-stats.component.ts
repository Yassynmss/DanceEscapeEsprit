import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-group-stats',
  templateUrl: './group-stats.component.html',
  styleUrls: ['./group-stats.component.css']
})
export class GroupStatsComponent implements OnInit {
  groupStats: any[] = [];

  constructor(private dancerGroupService: UserService) { }

  ngOnInit(): void {
    this.fetchGroupStats();
  }

  fetchGroupStats(): void {
    this.dancerGroupService.getDancerGroups().subscribe(
      (groups) => {
        // Agréger les données pour obtenir le nombre de groupes créés par jour
        this.groupStats = this.aggregateGroupStats(groups);
      },
      (error) => {
        console.error('Erreur lors de la récupération des groupes Dancer : ', error);
      }
    );
  }

  aggregateGroupStats(groups: any[]): any[] {
    // Utiliser des méthodes de JavaScript pour agréger les données
    const aggregatedStats: { [date: string]: number } = {}; // Définir le type explicite pour aggregatedStats
    groups.forEach(group => {
      const creationDate = new Date(group.creationDate).toDateString();
      aggregatedStats[creationDate] = (aggregatedStats[creationDate] || 0) + 1;
    });
    // Convertir les données agrégées en tableau
    return Object.keys(aggregatedStats).map(date => ({ date, count: aggregatedStats[date] }));
  }
  
}
