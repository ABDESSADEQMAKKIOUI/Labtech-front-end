import {Echantillon} from "../echantillon/echantillon";
import {Numeration} from "../numeration/numeration";
import {Reactif} from "../reactif/reactif";

export class Analyse {
  idAnalyse: number;
  echantillon: Echantillon;
  nomAnalyse: string;
  dateDebut: Date;
  dateFin: Date;
  commantaire: string;
  numerations: Numeration[];
  deleted: boolean;
  reactifAnalyseList: { reactif: Reactif; quantite: number }[];

  constructor() {
    // Initialize your properties if needed
    this.idAnalyse = 0;
    this.echantillon = new Echantillon();
    this.nomAnalyse = '';
    this.dateDebut = new Date();
    this.dateFin = new Date();
    this.commantaire = '';
    this.numerations = [];
    this.deleted = false;
  }
}

