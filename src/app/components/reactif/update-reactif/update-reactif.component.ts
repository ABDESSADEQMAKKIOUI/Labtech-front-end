import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Reactif} from "../../../entities/reactif/reactif";
import {ReactifService} from "../../../services/reactif/reactif/reactif.service";
@Component({
  selector: 'app-update-reactif',
  templateUrl: './update-reactif.component.html',
  styleUrls: ['./update-reactif.component.css']
})
export class UpdateReactifComponent implements OnInit {
  id: number;
  reactif: Reactif;

  constructor(private route: ActivatedRoute, private router: Router, private reactifService: ReactifService) { }

  ngOnInit() {
    // @ts-ignore
    this.reactif = new Reactif();

    this.id = this.route.snapshot.params['id'];

    this.reactifService.getReactifById(this.id)
      .subscribe(data => {
        console.log(data)
        this.reactif = data;
      }, error => console.log(error));
  }

  updateReactif() {
    this.reactifService.updateReactif(this.id, this.reactif)
      .subscribe(data => console.log(data), error => console.log(error));
    // @ts-ignore
    this.reactif = new Reactif();
    this.gotoList();
  }

  onSubmit() {
    this.updateReactif();
  }

  gotoList() {
    this.router.navigate(['/reactifs']);
  }
}
