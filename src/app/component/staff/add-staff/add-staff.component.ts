
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaffService } from 'src/app/core/services/StaffService/staff-service.service';
import { Staff, Job } from 'src/app/core/models/staff/staff';
import { Logistic } from 'src/app/core/models/logistic/logistic';
import { LogisticService } from 'src/app/core/services/LogisticService/logistic-service.service';
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  staffForm!: FormGroup;
  jobs = Object.values(Job); 
  logistics: Logistic[] = [];
  constructor(private staffService: StaffService,  private logisticService: LogisticService) { }

  ngOnInit(): void {

    this.logisticService.getAllLogistics().subscribe(logistics => {
      this.logistics = logistics;
    });
    this.staffForm = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      DateOfBirth: new FormControl('', Validators.required), 
      number: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]), 
      email: new FormControl('', [Validators.required, Validators.email]),
      id_logistic: new FormControl('', Validators.required)
    });
  }

  saveStaff(): void {
    if (this.staffForm.valid) {
      this.staffService.addStafff(this.staffForm.value , this.staffForm.value.id_logistic)
        .subscribe({
          next: (res) => {
            console.log(res);
            alert('Staff member added successfully!');
          },
          error: (e) => {
            console.error(e);
            alert('There was an error adding the staff member. Please check the form for any missing or incorrect information.');
          }
        });
    } else {
      alert('The form is not valid. Please check all fields and try again.');
    }
  }
 
}
