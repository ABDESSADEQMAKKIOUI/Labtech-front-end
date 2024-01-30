import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {Utilisateur} from "../../../entities/utilisateur/utilisateur";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs: Utilisateur[] = [];

  constructor(private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {
    this.getUtilisateurs();
  }

  getUtilisateurs(): void {
    this.utilisateurService.getAllUsers()
      .subscribe(utilisateurs => this.utilisateurs = utilisateurs);
  }

  deleteUser(id: number): void {

    console.log( "hna ma" ,id);
    this.utilisateurService.deleteUser(id).subscribe(() => {
      // Filter the deleted utilisateur from the displayed utilisateurs list
      this.utilisateurs = this.utilisateurs.filter(u => u.idUtilisateur !== id);
      console.log(`Utilisateur with ID ${id} deleted.`);
    });
  }
}
