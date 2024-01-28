export class Utilisateur  {
  id: number;
  role: string;
  password: string;
  nomUtilisateur: string;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  sexe: string;
  adresse: string;
  tel: string;

  constructor() {

    this.role = '';
    this.password = '';
    this.nomUtilisateur = '';
    this.id = 0;
    this.nom = '';
    this.prenom = '';
    this.dateNaissance = new Date();
    this.sexe = '';
    this.adresse = '';
    this.tel = '';
  }
}
