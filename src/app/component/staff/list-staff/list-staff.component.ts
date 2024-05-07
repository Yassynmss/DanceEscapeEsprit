import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/Services/staff.service';
import { Staff } from 'src/app/core/models/staff/staff';
import { saveAs as fileSaverSaveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Logistic } from 'src/app/core/models/logistic/logistic';
import { LogisticService } from 'src/app/Services/logistic.service';


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
  logistics: Logistic[] = [];
  constructor(private staffService: StaffService,  private logisticService: LogisticService,private router: Router) { }


  jobs = ['TECHNICAL_SONG', 'ENGINEER_SONG', 'SECURITY', 'NURSE', 'DOCTOR', 'CLEANER', 'MAKEUP_ARTIST', 'TECHNICAL', 'COACH', 'DANCE_COACH', 'ENGINEER', 'RH', 'DJ', 'ORGANIZER', 'DRIVER', 'CHIEF'];
  searchTerm$ = new Subject<void>();
  
  ngOnInit() {
    this.logisticService.getAllLogistics().subscribe(logistics => {
      this.logistics = logistics;
    });
  
    this.searchTerm$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(() => {
      this.searchStaff();
    });
  

    this.searchTerm$.next();
  }
  
  searchStaff(): void {
    if (this.job === '' && this.name === '') {
     
      this.retrieveStaff();
    } else {
      this.staffService.searchStaff(this.id_staff, this.name, this.job)
        .subscribe(
          data => {
            this.staffList = data;
            console.log(data);
          },
          error => console.error(error)
        );
    }
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

  
  sortByID(): void {
    this.staffList.sort((a, b) => a.id_staff - b.id_staff);
  }
  
  sortByName(): void {
    this.staffList.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  
  
  
  sortByDateOfBirth(): void {
    this.staffList.sort((a, b) => new Date(a.DateOfBirth).getTime() - new Date(b.DateOfBirth).getTime());
  }
  
  downloadExcel() {
    const staffData = this.staffList.map(staff => ({
      'ID': staff.id_staff,
      'Name': staff.name,
      'Job': staff.job,
      'DateOfBirth' : staff.DateOfBirth,
      'Number': staff.number,
      'Email' : staff.email
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(staffData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
    fileSaverSaveAs(data, 'staff.xlsx');
  }
  goToChartStaff() {
    this.router.navigate(['/admin/chartstaff']);
  }

  assignToLogistic(staff: Staff, id_logistic: number): void {
    this.staffService.assignLogisticToStaff(staff.id_staff, id_logistic)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.retrieveStaff();
        },
        error: (e) => console.error(e)
      });
  }
  
}
