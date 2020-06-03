export class Product {

  id: number;
  titre: string;
  description: string;
  image: string;
  prix: number;

  constructor(id: number, titre: string, description: string, image: string, prix: number) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.image = image;
    this.prix = prix;
  }
}
