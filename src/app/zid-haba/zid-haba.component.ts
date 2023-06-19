import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';
import { category } from '../model/category.model';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-zid-haba',
  templateUrl: './zid-haba.component.html',
  styleUrls: ['./zid-haba.component.css']
})
export class ZidHabaComponent implements OnInit {
  categories! : category[];
  newProduit = new produit;
  MSG!: string;
  newIdCat! : string;

  ngOnInit(): void {
    this.ps.listeCats().subscribe(c => {
      console.log(c);

      this.categories=c._embedded.categories;
    });

  }

  constructor (
               private ps : ProduitService,
               private rou : Router ){}

zidHaba(){


  this.newProduit.cat = this.categories.find(cato => cato.nomCat == this.newIdCat)!;

  this.ps.addProduit(this.newProduit)
  .subscribe(pro =>{
    console.log(pro);
    this.rou.navigate(['produits']);
  })
};



}
