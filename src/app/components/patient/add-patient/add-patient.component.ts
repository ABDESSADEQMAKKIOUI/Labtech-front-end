import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../services/patient/patient.service";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Patient} from "../../../entities/patient/patient";
import {ActivatedRoute, Router} from "@angular/router";
import {EchantillonService} from "../../../services/echantillon/echantillon.service";





@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {


  constructor(private patientservice:PatientService,
  private router: Router,) { }
  patients:Patient[]=[];
  ngOnInit(): void {
  }

// ... your component class ...

  addFournisseur(addForm: NgForm): void {
    if (addForm.valid) {
      // Access the form values
      const formData = addForm.value;

      // Now you can send formData to your service
      this.patientservice.addPatient(formData)
        .subscribe(() => this.router.navigate(['/patients']));
    } else {
      // Handle the case where the form is not valid
      console.error('Form is not valid.');
    }
  }

}
