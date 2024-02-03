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

  analyse: Analyse;
  idAnalyse: number;

  constructor(
    private analyseService: AnalyseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.analyse = new Analyse();
    this.idAnalyse = this.route.snapshot.params['id'];
    this.analyseService.getAnalysisById(this.idAnalyse)
      .subscribe(data => {
        console.log(data);
        this.analyse = data;
      }, error => console.log(error));
  }

  updateAnalyse(): void {
    this.analyseService.updateAnalysis(this.analyse)
      .subscribe(data => {
        console.log(data);
        this.analyse = new Analyse();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateAnalyse();
  }

  gotoList(): void {
    this.router.navigate(['/analyses']);
  }

}
