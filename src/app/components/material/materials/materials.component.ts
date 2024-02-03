import { Component, OnInit } from '@angular/core';

import {Material} from "../../../entities/material/material";
import {MaterialService} from "../../../services/material/material.service";

@Component({
  selector: 'app-materiels',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: Material[] = [];

  constructor(private materialService: MaterialService) {
  }

  ngOnInit(): void {
    this.getMaterials();
  }

  getMaterials(): void {
    this.materialService.getAllOutils()
      .subscribe(materials=> this.materials = materials);
  }

  deleteOutil(id: number): void {


    this.materialService.deleteOutil(id).subscribe(() => {
      // Filter the deleted utilisateur from the displayed utilisateurs list
      this.materials = this.materials.filter(u => u.idOutil !== id);
      console.log(`Utilisateur with ID ${id} deleted.`);
    });
  }
}
