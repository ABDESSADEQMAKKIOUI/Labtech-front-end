import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../../../entities/fournisseur/fournisseur";
import {FournisseurService} from "../../../services/Fournisseur/fournisseur.service";
import {HttpErrorResponse} from "@angular/common/http";
import * as console from "console";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-pdate-fournisseur',
  templateUrl: './pdate-fournisseur.component.html',
  styleUrls: ['./pdate-fournisseur.component.css']
})
export class PdateFournisseurComponent implements OnInit {

  public updatedfournisseur!: Fournisseur;
  constructor( private fournisseurservic :FournisseurService) { }

  ngOnInit(): void {
  }
  public UpdateFournisseur(fournisseur: Fournisseur): void {
    this.fournisseurservic.updateFournisseur(fournisseur).subscribe(
      (response: Fournisseur) => {
        console.log(response);
        this.fournisseurservic.getFournisseurs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
