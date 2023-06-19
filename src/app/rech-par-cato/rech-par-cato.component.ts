import { Component } from '@angular/core';
import { produit } from '../model/produit.model';
import { category } from '../model/category.model';
import { ProduitService } from '../service/produit.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-rech-par-cato',
  templateUrl: './rech-par-cato.component.html',
  styleUrls: ['./rech-par-cato.component.css']
}
)
export class RechParCatoComponent {
produits! : produit[] ;
IdCategorie! : number;
categories! : category[];
NewCat= new category;

constructor(private ps : ProduitService ,
  private rou : Router){
}
ngOnInit(): void {
  this.chargerCategos();
}
// chargerProds(){
//   this.ps.listeProduit().subscribe(pros =>{
//     this.produits=pros;
//   });
// }

chargerCategos(): void{
  this.ps.listeCats().subscribe(
    cats =>{
      this.categories=cats._embedded.categories;
    }

  );

}

nbedlo(){

this.ps.FBC(this.IdCategorie).subscribe(p =>{ this.produits=p });
console.log(this.IdCategorie);

console.log(this.produits);
}


zidCato(){
  this.ps.addCat(this.NewCat).subscribe(caty =>{
    console.log(caty);
  })
  this.rou.navigate(['produits']);
}
}
