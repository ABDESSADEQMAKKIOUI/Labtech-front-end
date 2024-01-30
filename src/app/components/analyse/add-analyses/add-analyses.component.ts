import { Component, OnInit } from '@angular/core';
import {Analyse} from "../../../entities/analyse/analyse";
import {Echantillon} from "../../../entities/echantillon/echantillon";
import {AnalyseService} from "../../../services/analyse/analyse.service";
import {EchantillonService} from "../../../services/echantillon/echantillon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-analyses',
  templateUrl: './add-analyses.component.html',
  styleUrls: ['./add-analyses.component.css']
})
export class AddAnalysesComponent implements OnInit {

  newAnalyse: Analyse = new Analyse();
  echantillons: Echantillon[] =[];

  constructor(
    private analyseService: AnalyseService,
    private echantillonService: EchantillonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEchantillons();
  }

  getEchantillons(): void {
    this.echantillonService.getEchantillons()
      .subscribe(echantillons => this.echantillons = echantillons);
  }

  addAnalyse(): void {
    this.analyseService.addAnalysis(this.newAnalyse.echantillon.idEchantillon)
      .subscribe((analyse: Analyse) => {
        console.log('Analyse ajoutée avec succès:', analyse);
        this.router.navigate(['/analyseDetail', analyse.idAnalyse]);
      }, error => {
        console.error('Erreur lors de l\'ajout de l\'analyse:', error);
      });
  }

}
