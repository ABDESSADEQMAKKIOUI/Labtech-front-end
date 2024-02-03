import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Material} from "../../../entities/material/material";
import {HttpErrorResponse} from "@angular/common/http";
import {MaterialService} from "../../../services/material/material.service";
import {Fournisseur} from "../../../entities/fournisseur/fournisseur";
import {FournisseurService} from "../../../services/Fournisseur/fournisseur.service";

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  fournisseurs : Fournisseur [] = [];

  constructor(private materielService: MaterialService, private fournisseurService: FournisseurService) {
  }

  ngOnInit() {
    this.fournisseurService.getFournisseurs().subscribe(data => {
      this.fournisseurs = data;
    });
  }

  addMaterial(addForm: NgForm) : void {
    const formData =  addForm.value;

    this.materielService.addOutil(formData).subscribe(
      (response: Material) => {
        console.log("ana hnaya ")
        console.log('Server response:', response);
        this.materielService.getAllOutils();
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
