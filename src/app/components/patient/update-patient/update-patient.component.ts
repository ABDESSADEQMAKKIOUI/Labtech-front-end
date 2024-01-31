import { Component, OnInit } from '@angular/core';
import {Patient} from "../../../entities/patient/patient";
import {PatientService} from "../../../services/patient/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {


  constructor(private patientservice:PatientService,
              private router: Router,
              private route: ActivatedRoute) { }
  patient:Patient;

  ngOnInit(): void {
    this.getPatient();
  }
 modPatient(updateForm: NgForm): void {
    if (updateForm.valid) {
      // Access the form values
      this.patient= updateForm.value;

      // Now you can send formData to your service
      this.patientservice. updatePatient(this.patient)
        .subscribe(() => this.router.navigate(['/patients']));
    } else {
      // Handle the case where the form is not valid
      console.error('Form is not valid.');
    }
  }
  getPatient(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientservice.getPatientById(id)
      .subscribe(patient => this.patient = patient);
    console.log('Patient:', this.patient);
  }
}
