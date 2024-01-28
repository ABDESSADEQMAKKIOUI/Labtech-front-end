import {Fournisseur} from "../fournisseur/fournisseur";

export class Material {
  idOutil: number;
  libelle: string;
  quantite: number;
  fournisseur: Fournisseur;
  deleted: boolean;

  constructor() {
    // Initialize your properties if needed
    this.idOutil = 0;
    this.libelle = '';
    this.quantite = 0;
    this.fournisseur = new Fournisseur();
    this.deleted = false;
  }
}
