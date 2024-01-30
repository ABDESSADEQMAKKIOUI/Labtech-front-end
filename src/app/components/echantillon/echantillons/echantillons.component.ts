import { Component, OnInit } from '@angular/core';
import {EchantillonService} from "../../../services/echantillon/echantillon.service";
import {Echantillon} from "../../../entities/echantillon/echantillon";

@Component({
  selector: 'app-echantillons',
  templateUrl: './echantillons.component.html',
  styleUrls: ['./echantillons.component.css']
})
export class EchantillonsComponent implements OnInit {

  echantillons: Echantillon[] =[];

  constructor(private echantillonService: EchantillonService) { }

  ngOnInit(): void {
    this.getEchantillons();
  }

  getEchantillons(): void {
    this.echantillonService.getEchantillons()
      .subscribe(echantillons => this.echantillons = echantillons);
  }
  deleteEchantillon(id: number): void {
    this.echantillonService.deleteEchantillon(id)
      .subscribe(() => {
        // Filtrer l'analyse supprimée de la liste des analyses affichées
        this.echantillons = this.echantillons.filter(e => e.idEchantillon !== id);
        console.log(`Analyse avec ID ${id} supprimée.`);
      });
  }
}
