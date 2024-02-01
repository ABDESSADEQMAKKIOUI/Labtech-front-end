import { Component, OnInit } from '@angular/core';
import {Analyse} from "../../../entities/analyse/analyse";
import {Echantillon} from "../../../entities/echantillon/echantillon";
import {AnalyseService} from "../../../services/analyse/analyse.service";
import {EchantillonService} from "../../../services/echantillon/echantillon.service";
import {Router} from "@angular/router";
import {Reactif} from "../../../entities/reactif/reactif";
import {ReactifService} from "../../../services/reactif/reactif/reactif.service";

@Component({
  selector: 'app-add-analyses',
  templateUrl: './add-analyses.component.html',
  styleUrls: ['./add-analyses.component.css']
})
export class AddAnalysesComponent implements OnInit {

  echantillons: Echantillon[];
  selectedEchantillonId: number;
  reactifs: Reactif[];
  selectedReactifs: { reactif: Reactif, quantite: number }[] = [];
  nouvelleAnalyse: Analyse = new Analyse();

  constructor(
    private analyseService: AnalyseService,
    private echantillonService: EchantillonService,
    private reactifService: ReactifService
  ) { }

  ngOnInit(): void {
    this.loadEchantillons();
    this.loadReactifs();
  }

  loadEchantillons(): void {
    this.echantillonService.getEchantillons()
      .subscribe(echantillons => {
        this.echantillons = echantillons;
      });
  }

  loadReactifs(): void {
    this.reactifService.getAllReactifs()
      .subscribe(reactifs => {
        this.reactifs = reactifs;
      });
  }

  addReactif(): void {
    this.selectedReactifs.push({ reactif: null, quantite: 0 });
  }

  removeReactif(index: number): void {
    this.selectedReactifs.splice(index, 1);
  }

  saveAnalyse(): void {
    this.nouvelleAnalyse.echantillon = { idEchantillon: this.selectedEchantillonId } as Echantillon;
    this.nouvelleAnalyse.reactifAnalyseList = this.selectedReactifs.map(item => ({
      reactif: item.reactif,
      quantite: item.quantite
    }));

    this.analyseService.addAnalysis(this.nouvelleAnalyse)
      .subscribe(
        response => {
          console.log('Analyse ajoutée avec succès : ', response);
          this.nouvelleAnalyse = new Analyse();
          this.selectedEchantillonId = null;
          this.selectedReactifs = [];
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'analyse : ', error);
        }
      );
  }

}
