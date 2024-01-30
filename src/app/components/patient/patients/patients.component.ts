import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../services/patient/patient.service";
import {Patient} from "../../../entities/patient/patient";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor( private patientService:PatientService) { }
  patients:Patient[]=[];

  ngOnInit(): void {
  }

  loadpatient():void{
    this.patientService.getAllPatients().subscribe(  (data) => {
      this.patients = data;
    },
    (error) => {
      console.error('Error loading patient:', error);
    }
  );
  }


}
