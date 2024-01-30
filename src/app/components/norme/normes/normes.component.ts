import { Component, OnInit } from '@angular/core';
import {NormeService} from "../../../services/norme/norme.service";
import {Norme} from "../../../entities/norme/norme";

@Component({
  selector: 'app-normes',
  templateUrl: './normes.component.html',
  styleUrls: ['./normes.component.css']
})
export class NormesComponent implements OnInit {
public normes : Norme[] =[]  ;
  constructor(private normeservice : NormeService) { }

  ngOnInit(): void {
    this.loadNorme() ;
  }
  loadNorme(): void {
    this.normeservice.getAllNormes().subscribe(
      normes=> this.normes = normes
    );
  }
}
