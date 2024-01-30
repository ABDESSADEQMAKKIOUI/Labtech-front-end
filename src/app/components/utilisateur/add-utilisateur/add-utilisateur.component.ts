import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {NgForm} from "@angular/forms";
import {Utilisateur} from "../../../entities/utilisateur/utilisateur";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css'] // Corrected CSS file path
})
export class AddUtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];

  constructor(private utilisateurService :UtilisateurService) { }

  ngOnInit(): void {
    this.getUtilisateurs();
  }

  getUtilisateurs(): void {
    this.utilisateurService.getAllUsers().subscribe(
      (response: Utilisateur[]) => {
        this.utilisateurs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addUtilisateur(addForm: NgForm) : void {
    this.utilisateurService.adUtilisateur(addForm).subscribe(
      (response: Utilisateur) => {
        console.log(response);
        this.getUtilisateurs();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
