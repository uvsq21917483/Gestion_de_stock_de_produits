import { category } from "./category.model";

export class produit{
  id! : Number;
  nom? : string;
  prix?: number;
  dateCreation?: Date;
  cat! : category;
}
