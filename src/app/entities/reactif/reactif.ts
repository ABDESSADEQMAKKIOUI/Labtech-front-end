import {Fournisseur} from "../fournisseur/fournisseur";

export class Reactif {
  idReactif?: number;
  nom: string;
  description: string;
  quantite: number;
  dateExpiration: Date;
  fournisseur: Fournisseur;
  deleted: boolean;

  constructor(
    nom: string,
    description: string,
    quantite: number,
    dateExpiration: Date,
    fournisseur: Fournisseur,
    deleted: boolean
  ) {
    this.nom = nom;
    this.description = description;
    this.quantite = quantite;
    this.dateExpiration = dateExpiration;
    this.fournisseur = fournisseur;
    this.deleted = deleted;
  }
}



