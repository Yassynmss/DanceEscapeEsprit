import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';
import { Staff } from 'src/app/core/models/staff/staff';
import { Job } from 'src/app/core/models/staff/staff';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css'],
})
export class UpdateStaffComponent implements OnInit {
  staffForm!: FormGroup;
  jobs = Object.values(Job); 

  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
 
    const id_staff = this.activatedRoute.snapshot.params['id_staff'];
    this.staffForm = this.fb.group({
      id_staff: [id_staff],
      name: [''],
      job: [''],
      DateOfBirth: [''],
      number: [''],
      email: [''],
      image: [''],
    });
    this.getStaffById(id_staff);
  }

  getStaffById(id_staff: number) {
    this.staffService.getStaffById(id_staff).subscribe((res) => {
      this.staffForm.patchValue(res);
    });
  }

  updateStaff() {
    if (this.staffForm.valid) {
      const id_staff = this.staffForm.get('id_staff')?.value;
      this.staffService.updateStaff(id_staff, this.staffForm.value).subscribe(
        () => {
          alert('Update done');
          this.router.navigate(['/list-staff']);
        },
        (error) => {
          console.error('Error updating staff:', error);
          alert('Update failed');
        }
      );
    } else {
      alert('Please fill in all required fields');
    }
  }
}
