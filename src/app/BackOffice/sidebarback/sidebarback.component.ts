import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarback',
  templateUrl: './sidebarback.component.html',
  styleUrls: ['./sidebarback.component.css']
})
export class SidebarbackComponent {
  constructor(private router: Router) {}

  showparticipation()
  {
    this.router.navigate(['/participations' ]);
  }
}
