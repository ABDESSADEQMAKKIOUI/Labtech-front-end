import { Component, OnInit } from '@angular/core';
import {Echantillon} from "../../../entities/echantillon/echantillon";
import {EchantillonService} from "../../../services/echantillon/echantillon.service";
import {Router} from "@angular/router";
import {Patient} from "../../../entities/patient/patient";
import {PatientService} from "../../../services/patient/patient.service";

@Component({
  selector: 'app-add-echantillon',
  templateUrl: './add-echantillon.component.html',
  styleUrls: ['./add-echantillon.component.css']
})
export class AddEchantillonComponent implements OnInit {


  ngOnInit(): void {
    this.loadPatients();
  }

  newEchantillon: Echantillon = new Echantillon();
  patients: Patient[] = [];
  constructor(private echantillonService: EchantillonService, private router: Router,
              private patientservice : PatientService) {
  }

  addEchantillon(): void {
    this.echantillonService.addEchantillon(this.newEchantillon)
      .subscribe(() => this.router.navigate(['/echantillons']));
  }
  loadPatients() {
    this.patientservice.getAllPatients()
      .subscribe(patients => this.patients = patients);
  }
}
