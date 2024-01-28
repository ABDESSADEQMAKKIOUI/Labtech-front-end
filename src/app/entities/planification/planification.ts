import {Analyse} from "../analyse/analyse";
import {Utilisateur} from "../utilisateur/utilisateur";


export class Planification {
  idPlanification: number;
  analyse: Analyse;
  utilisateur: Utilisateur;
  dateDebut: Date;
  dateFin: Date;
  deleted: boolean;

  constructor() {
    // Initialize your properties if needed
    this.idPlanification = 0;
    this.analyse = new Analyse();
    this.utilisateur = new Utilisateur();
    this.dateDebut = new Date();
    this.dateFin = new Date();
    this.deleted = false;
  }
}
