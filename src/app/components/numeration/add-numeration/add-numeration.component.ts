import { Component, OnInit } from '@angular/core';

import {NumerationService} from "../../../services/numeration/numeration.service";
import {Norme} from "../../../entities/norme/norme";
import {Analyse} from "../../../entities/analyse/analyse";
import {Router} from "@angular/router";
import {AnalyseService} from "../../../services/analyse/analyse.service";
import {NormeService} from "../../../services/norme/norme.service";
import {Numeration} from "../../../entities/numeration/numeration";
import {NgForm} from "@angular/forms";



@Component({
  selector: 'app-add-numeration',
  templateUrl: './add-numeration.component.html',
  styleUrls: ['./add-numeration.component.css']
})
export class AddNumerationComponent implements OnInit {
  private analyses:Analyse[];

  constructor(private numérationService:NumerationService,private router: Router,private normeService: NormeService
              ,private analyseservice: AnalyseService) { }
  numérations:Numeration[]=[];

  ngOnInit(): void {
  }
  addNumeration(addForm: NgForm): void {
    if (addForm.valid) {
      // Access the form values
      const formData = addForm.value;

      // Now you can send formData to your service
      this.numérationService.addNumeration(formData)
        .subscribe(() => this.router.navigate(['/numerations']));
    } else {
      // Handle the case where the form is not valid
      console.error('Form is not valid.');
    }
  }

}
