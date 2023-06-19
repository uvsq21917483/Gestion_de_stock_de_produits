import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-rechparnom',
  templateUrl: './rechparnom.component.html',
  styleUrls: ['./rechparnom.component.css']
})
export class RechparnomComponent implements OnInit {
produits !: produit[];
allproduits!: produit[];
nomprod! : string;
searchTerm! : string;
constructor(private ps: ProduitService){  }

  ngOnInit(): void {
    this.ps.listeProduit().subscribe(p =>{
      this.produits=p;
    });
  }

  elqaha(){
    this.ps.FBNC(this.nomprod).subscribe( p =>{
      this.produits=p;
    });
  }

    onKeyUp(filterText : string){
      this.produits=this.allproduits.filter( item =>
        item.nom?.toLowerCase().includes(filterText));
    }


  }


