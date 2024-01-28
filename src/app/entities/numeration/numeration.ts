import {Norme} from "../norme/norme";
import {Analyse} from "../analyse/analyse";


export class Numeration {
  idNumeration: number;
  value: number;
  statut: string;
  norme: Norme;
  analyse: Analyse;
  deleted: boolean;

  constructor() {
    // Initialize your properties if needed
    this.idNumeration = 0;
    this.value = 0;
    this.statut = "";
    this.norme = new Norme();
    this.analyse = new Analyse();
    this.deleted = false;
  }
}
