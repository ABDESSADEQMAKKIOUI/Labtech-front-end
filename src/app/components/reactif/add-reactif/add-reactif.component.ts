import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../services/patient/patient.service";
import {NgForm} from "@angular/forms";
import {Patient} from "../../../entities/patient/patient";
import {ActivatedRoute, Router} from "@angular/router";
import {ReactifService} from "../../../services/reactif/reactif/reactif.service";
import {Reactif} from "../../../entities/reactif/reactif";
import {FournisseurService} from "../../../services/Fournisseur/fournisseur.service";
import {Fournisseur} from "../../../entities/fournisseur/fournisseur";





@Component({
  selector: 'app-add-patient',
  templateUrl: './add-reactif.component.html',
  styleUrls: ['./add-reactif.component.css']
})
export class AddReactifComponent implements OnInit {


  constructor(private reactifservice:ReactifService,
  private router: Router,  private fournisseurService: FournisseurService) { }
  reactifs:Reactif[]=[];
  fournisseurs : Fournisseur [] = [];

  ngOnInit() {
    this.fournisseurService.getFournisseurs().subscribe(data => {
      this.fournisseurs = data;
      console.log(data[0].idFournisseur)
    });
  }

  addReactif(addForm: NgForm): void {
    if (addForm.valid) {
      // Access the form values
      const formData = addForm.value;

      // Now you can send formData to your service
      this.reactifservice.addReactif(formData)
        .subscribe(() => this.router.navigate(['/reactifs']));
    } else {
      // Handle the case where the form is not valid
      console.error('Form is not valid.');
    }
  }

}
