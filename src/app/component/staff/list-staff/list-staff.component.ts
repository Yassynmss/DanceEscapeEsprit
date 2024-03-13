import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/core/services/StaffService/staff-service.service';
import { Staff } from 'src/app/core/models/staff/staff';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {
  staffList: Staff[] = [];
  id_staff: number | null = null;
  name: string | null = null;
  job: string | null = null;

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.retrieveStaff();
  }

  retrieveStaff(): void {
    this.staffService.getAllStaff()
      .subscribe({
        next: (data) => {
          this.staffList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  removeStaff(staff: Staff): void {
    if (staff.id_staff) {
      this.staffService.deleteStaff(staff.id_staff)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.retrieveStaff();
          },
          error: (e) => console.error(e)
        });
    }
  }

  searchStaff(): void {
    this.staffService.searchStaff(this.id_staff, this.name, this.job)
      .subscribe({
        next: (data) => {
          this.staffList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
