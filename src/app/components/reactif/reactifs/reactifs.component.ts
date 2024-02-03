import { Component, OnInit } from '@angular/core';

import {Reactif} from "../../../entities/reactif/reactif";
import {ReactifService} from "../../../services/reactif/reactif/reactif.service";

@Component({
  selector: 'app-reactifs',
  templateUrl: './reactifs.component.html',
  styleUrls: ['./reactifs.component.css']
})
export class ReactifsComponent implements OnInit {

  reactifs: Reactif[] = [];

  constructor(private reactifService: ReactifService) {
  }

  ngOnInit(): void {
    this.getReactifs();
  }

  getReactifs(): void {
    this.reactifService.getAllReactifs()
      .subscribe(reactifs => this.reactifs = reactifs);
  }

  deleteReactif(id: number): void {

    console.log( "hna ma" ,id);
    this.reactifService.deleteReactif(id).subscribe(() => {
      // Filter the deleted utilisateur from the displayed utilisateurs list
      this.reactifs = this.reactifs.filter(u => u.idReactif !== id);
      console.log(`Utilisateur with ID ${id} deleted.`);
    });
  }
}
