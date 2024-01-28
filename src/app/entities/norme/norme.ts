export class Norme {
  idNorme: number;
  libelle: string;
  unite: string;
  maxValue: number;
  minValue: number;
  deleted: boolean;

  constructor() {
    // Initialize your properties if needed
    this.idNorme = 0;
    this.libelle = '';
    this.unite = '';
    this.maxValue = 0;
    this.minValue = 0;
    this.deleted = false;
  }
}

