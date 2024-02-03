import { Component, OnInit } from '@angular/core';
import {FournisseurService} from "../../../services/Fournisseur/fournisseur.service";
import {Fournisseur} from "../../../entities/fournisseur/fournisseur";

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  constructor(private fournisseurService: FournisseurService) { }
  fournisseurs: Fournisseur[] = [];
  ngOnInit(): void {
    this.loadFournisseurs();
  }
  loadFournisseurs(): void {
    this.fournisseurService.getFournisseurs().subscribe(
      (data) => {
        this.fournisseurs = data;
      },
      (error) => {
        console.error('Error loading fournisseurs:', error);
      }
    );
  }
}
