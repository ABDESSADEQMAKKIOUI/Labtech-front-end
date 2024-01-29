import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {Utilisateur} from "../../../entities/utilisateur/utilisateur";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService) { }
  utilisateurs: Utilisateur[] = [];
  ngOnInit(): void {
    this.getUtilisateurs();
  }
  getUtilisateurs(): void {
    this.utilisateurService.getAllUsers().subscribe(
      (response: Utilisateur[]) => {
        console.log('API Response:', response);
        this.utilisateurs = response;
        console.log('Updated utilisateurs:', this.utilisateurs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
