import { category } from "./category.model";

export class categoryWrapped{
  _embedded!: {categories : category[] };
}
