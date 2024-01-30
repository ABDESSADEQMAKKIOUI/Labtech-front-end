import { Component, OnInit } from '@angular/core';
import {Analyse} from "../../../entities/analyse/analyse";
import {Echantillon} from "../../../entities/echantillon/echantillon";
import {Patient} from "../../../entities/patient/patient";
import {Utilisateur} from "../../../entities/utilisateur/utilisateur";
import {Reactif} from "../../../entities/reactif/reactif";
import {ActivatedRoute} from "@angular/router";
import {AnalyseService} from "../../../services/analyse/analyse.service";
import {Numeration} from "../../../entities/numeration/numeration";

@Component({
  selector: 'app-analyse-detail',
  templateUrl: './analyse-detail.component.html',
  styleUrls: ['./analyse-detail.component.css']
})
export class AnalyseDetailComponent implements OnInit {
  id: number =0;
  analyse: Analyse = new Analyse();
  echantillon: Echantillon = new Echantillon();
  patient: Patient = new Patient();
  utilisateur: Utilisateur = new Utilisateur();
  reactifs: Reactif[] =[];
  numerations :Numeration[] =[];

  constructor(private route: ActivatedRoute , private analyseService: AnalyseService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getAnalyse();
    this.echantillon = this.analyse.echantillon;
    this.patient = this.echantillon.patient;
    this.utilisateur = this.echantillon.utilisateur;
    this.numerations = this.analyse.numerations ;
     // this.reactifs = this.analyse.;
  }
  getAnalyse(): void {
    this.analyseService.getAnalysisById(this.id)
      .subscribe(analyse => this.analyse = analyse);
  }
}
