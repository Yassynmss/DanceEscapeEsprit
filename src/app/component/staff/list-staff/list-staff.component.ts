import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/core/services/StaffService/staff-service.service';
import { Staff } from 'src/app/core/models/staff/staff';
import { saveAs as fileSaverSaveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';



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

  constructor(private staffService: StaffService, private router: Router) { }

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
}
