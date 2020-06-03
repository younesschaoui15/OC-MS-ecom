export class Order {

  id: number;
  productId: number;
  dateCommande: Date;
  quantite: number;
  commandePayee: boolean;

  constructor(id?: number, productId?: number, dateCommande?: Date, quantite?: number, commandePayee?: boolean) {
    this.id = id;
    this.productId = productId;
    this.dateCommande = dateCommande;
    this.quantite = quantite;
    this.commandePayee = commandePayee;
  }
}
