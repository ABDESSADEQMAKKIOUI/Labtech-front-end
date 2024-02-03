import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {NumerationService} from "../../../services/numeration/numeration.service";
import {Router} from "@angular/router";
import {NormeService} from "../../../services/norme/norme.service";
import {AnalyseService} from "../../../services/analyse/analyse.service";
import {Numeration} from "../../../entities/numeration/numeration";

@Component({
  selector: 'app-update-numeration',
  templateUrl: './update-numeration.component.html',
  styleUrls: ['./update-numeration.component.css']
})
export class UpdateNumerationComponent implements OnInit {
   numeration: Numeration;

  constructor(private numerationService:NumerationService,private router: Router,private normeService: NormeService
              ,private analyseservice: AnalyseService) { }

  ngOnInit(): void {
  }
  updateNumeration(updateForm: NgForm): void {
    if (updateForm.valid) {
      // Access the form values
      this.numeration= updateForm.value;

      // Now you can send formData to your service
      this.numerationService. updateNumeration(this.numeration)
        .subscribe(() => this.router.navigate(['/numerations']));
    } else {
      // Handle the case where the form is not valid
      console.error('Form is not valid.');
    }
  }


}
