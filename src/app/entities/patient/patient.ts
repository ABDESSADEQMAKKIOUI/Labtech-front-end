import {Echantillon} from "../echantillon/echantillon";

export class Patient {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  sexe: string;
  adresse: string;
  tel: string;
  deleted: boolean;
  echantillons: Echantillon[];
  constructor() {
    // Initialize your properties if needed
    this.id = 0;
    this.nom = '';
    this.prenom = '';
    this.dateNaissance = new Date();
    this.sexe = '';
    this.adresse = '';
    this.tel = '';
    this.deleted = false;
    this.echantillons = [];
  }
}
