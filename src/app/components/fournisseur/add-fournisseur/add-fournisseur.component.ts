import { Component, OnInit } from '@angular/core';
import {FournisseurService} from "../../../services/Fournisseur/fournisseur.service";
import {NgForm} from "@angular/forms";
import {Fournisseur} from "../../../entities/fournisseur/fournisseur";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  constructor(private fournisseurservice :FournisseurService) { }

  ngOnInit(): void {
  }
  addFournisseur(addForm: NgForm) : void {
    this.fournisseurservice.addFournisseur(addForm).subscribe(
      (response: Fournisseur) => {
        console.log(response);
        this.fournisseurservice.getFournisseurs();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
