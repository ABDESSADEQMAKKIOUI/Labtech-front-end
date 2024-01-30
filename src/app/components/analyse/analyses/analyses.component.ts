import { Component, OnInit } from '@angular/core';
import {AnalyseService} from "../../../services/analyse/analyse.service";
import {Analyse} from "../../../entities/analyse/analyse";

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {

  analyses: Analyse[] =[];

  constructor(private analyseService: AnalyseService) { }

  ngOnInit(): void {
    this.getAnalyses();
  }

  getAnalyses(): void {
    this.analyseService.getAnalyses()
      .subscribe(analyses => this.analyses = analyses);
  }

  deleteAnalyse(id: number): void {
    this.analyseService.deleteAnalysis(id)
      .subscribe(() => {
        // Filtrer l'analyse supprimée de la liste des analyses affichées
        this.analyses = this.analyses.filter(a => a.idAnalyse !== id);
        console.log(`Analyse avec ID ${id} supprimée.`);
      });
  }

}
