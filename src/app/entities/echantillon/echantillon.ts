import {Patient} from "../patient/patient";
import {Utilisateur} from "../utilisateur/utilisateur";
import {Analyse} from "../analyse/analyse";


export class Echantillon {
  idEchantillon: number;
  patient: Patient;
  utilisateur: Utilisateur;
  datePrelevement: Date;
  typeAnalyse: string;
  Status: string;
  analyses: Analyse[];
  deleted: boolean;

  constructor() {
    // Initialize your properties if needed
    this.idEchantillon = 0;
    this.patient = new  Patient();
    this.utilisateur = new  Utilisateur();
    this.datePrelevement = new Date();
    this.typeAnalyse = '';
    this.Status = "";
    this.analyses = [];
    this.deleted = false;
  }
}
