import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../entities/utilisateur/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {MaterialService} from "../../../services/material/material.service";
import {Material} from "../../../entities/material/material";

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {


  material: Material = new Material();
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private materialService: MaterialService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getMateriel();
  }

  getMateriel(): void {
    this.materialService.getOutilByID(this.id)
      .subscribe(material => this.material = material);
  }

  updateMateriel(updateForm: NgForm): void {
    this.materialService.updateOutil(this.material)
      .subscribe(() => {
        console.log('Material update.');
        // Rediriger vers la liste des analyses ou une autre page après la mise à jour
        this.router.navigate(['/materials']);
      });
  }

}

