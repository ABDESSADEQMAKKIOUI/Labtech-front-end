import { Component, OnInit } from '@angular/core';
import {Analyse} from "../../../entities/analyse/analyse";
import {ActivatedRoute, Router} from "@angular/router";
import {AnalyseService} from "../../../services/analyse/analyse.service";

@Component({
  selector: 'app-update-analyses',
  templateUrl: './update-analyses.component.html',
  styleUrls: ['./update-analyses.component.css']
})
export class UpdateAnalysesComponent implements OnInit {

  analyse: Analyse=new Analyse();
  id: number =0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private analyseService: AnalyseService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getAnalyse();
  }

  getAnalyse(): void {
    this.analyseService.getAnalysisById(this.id)
      .subscribe(analyse => this.analyse = analyse);
  }

  updateAnalyse(): void {
    this.analyseService.updateAnalysis(this.analyse)
      .subscribe(() => {
        console.log('Analyse mise à jour avec succès.');
        // Rediriger vers la liste des analyses ou une autre page après la mise à jour
        this.router.navigate(['/liste-analyses']);
      });
  }

}
