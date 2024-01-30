import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {NgForm} from "@angular/forms";
import {Utilisateur} from "../../../entities/utilisateur/utilisateur";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.html']
})
export class AddUtilisateurComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {
  }

  addUtilisateur(addForm: NgForm) : void {
    const formData =  addForm.value;

    this.utilisateurService.addUser(addForm.value).subscribe(
      (response: Utilisateur) => {
        console.log('Server response:', response);
        this.utilisateurService.getAllUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log('Server error:', error);
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
