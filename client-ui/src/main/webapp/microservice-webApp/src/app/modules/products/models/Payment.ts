export class Payment {

  id: number;
  idCommande: number;
  montant: number;
  numeroCarte: number;


  constructor(id?, idCommande?, montant?, numeroCarte?) {
    this.id = id;
    this.idCommande = idCommande;
    this.montant = montant;
    this.numeroCarte = numeroCarte;
  }
}
