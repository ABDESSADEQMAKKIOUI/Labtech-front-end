import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../entities/utilisateur/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utilisateurService: UtilisateurService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getUtilisateur();
  }

  getUtilisateur(): void {
    this.utilisateurService.getUserById(this.id)
      .subscribe(utilisateur => this.utilisateur = utilisateur);
  }

  updateUser(updateForm: NgForm): void {
    this.utilisateurService.updateUser(this.utilisateur)
      .subscribe(() => {
        console.log('Analyse mise à jour avec succès.');
        // Rediriger vers la liste des analyses ou une autre page après la mise à jour
        this.router.navigate(['/liste-analyses']);
      });
  }

}
