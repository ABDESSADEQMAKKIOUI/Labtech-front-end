import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Fournisseur} from "../../../entities/fournisseur/fournisseur";
import {HttpErrorResponse} from "@angular/common/http";
import {NormeService} from "../../../services/norme/norme.service";
import {Norme} from "../../../entities/norme/norme";

@Component({
  selector: 'app-add-norme',
  templateUrl: './add-norme.component.html',
  styleUrls: ['./add-norme.component.css']
})
export class AddNormeComponent implements OnInit {

  constructor( private normeservice : NormeService) { }

  ngOnInit(): void {
  }
  addNorme(addForm: NgForm) : void {
    this.normeservice.addNorme(addForm.value).subscribe(
      (response: Norme) => {
        console.log(response);
        this.normeservice.getAllNormes();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
