import { Component, OnInit } from '@angular/core';
import {Echantillon} from "../../../entities/echantillon/echantillon";
import {ActivatedRoute, Router} from "@angular/router";
import {EchantillonService} from "../../../services/echantillon/echantillon.service";
import {PatientService} from "../../../services/patient/patient.service";
import {Patient} from "../../../entities/patient/patient";

@Component({
  selector: 'app-update-echantillon',
  templateUrl: './update-echantillon.component.html',
  styleUrls: ['./update-echantillon.component.css']
})
export class UpdateEchantillonComponent implements OnInit {

  echantillon: Echantillon = new Echantillon();
  patients: Patient[] = [];
  constructor(
    private route: ActivatedRoute,
    private echantillonService: EchantillonService,
    private router: Router,
    private patientservice : PatientService
  ) { }

  ngOnInit(): void {
    this.getEchantillon();
    this.loadPatients();
  }

  getEchantillon(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.echantillonService.getEchantillonById(id)
      .subscribe(echantillon => this.echantillon = echantillon);
  }

  updateEchantillon(): void {
    this.echantillonService.updateEchantillon(this.echantillon)
      .subscribe(() => this.router.navigate(['/echantillons']));
  }
  loadPatients() {
    this.patientservice.getAllPatients()
      .subscribe(patients => this.patients = patients);
  }
}
