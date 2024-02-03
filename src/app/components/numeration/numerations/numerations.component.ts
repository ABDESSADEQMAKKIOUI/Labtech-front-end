import { Component, OnInit } from '@angular/core';

import {NumerationService} from "../../../services/numeration/numeration.service";
import {Numeration} from "../../../entities/numeration/numeration";

@Component({
  selector: 'app-numerations',
  templateUrl: './numerations.component.html',
  styleUrls: ['./numerations.component.css']
})
export class NumerationsComponent implements OnInit {

  constructor( private numeratioService:NumerationService) { }
numerations:Numeration[]=[];

  ngOnInit(): void {
    this.loadpatient();
  }

  loadpatient():void{
    this.numeratioService.getNumerations().subscribe(  (response) => {
        this.numerations = response;
      },
      (error) => {
        console.error('Error loading numeration:', error);
      }
    );
  }


}
