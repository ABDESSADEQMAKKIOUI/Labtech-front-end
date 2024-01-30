import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../services/patient/patient.service";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {


  constructor(private patientservice:PatientService) { }

  ngOnInit(): void {
  }

}
