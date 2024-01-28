export class Fournisseur {
  idFournisseur: number;
  nom: string;
  adresse: string;
  tel: string;
  deleted: boolean;

  constructor() {
    // Initialize your properties if needed
    this.idFournisseur = 0;
    this.nom = '';
    this.adresse = '';
    this.tel = '';
    this.deleted = false;
  }
}

