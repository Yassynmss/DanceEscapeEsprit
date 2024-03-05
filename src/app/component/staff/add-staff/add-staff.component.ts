// add-staff.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaffService } from 'src/app/core/services/StaffService/staff-service.service';
import { Staff, Job } from 'src/app/core/models/staff/staff';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  staffForm!: FormGroup;
  jobs = Object.values(Job); 
  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.staffForm = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      DateOfBirth: new FormControl('', Validators.required), 
      number: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]), 
      email: new FormControl('', [Validators.required, Validators.email])
     
    });
  }

  saveStaff(): void {
    if (this.staffForm.valid) {
      this.staffService.addStaff(this.staffForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (e) => console.error(e)
        });
    } else {
      console.log('Le formulaire n\'est pas valide');
    }
  }
}
