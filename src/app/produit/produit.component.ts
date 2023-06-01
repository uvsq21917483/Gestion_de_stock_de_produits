import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  produits? : produit [];


  constructor(private ps : ProduitService) {

    }

ngOnInit(): void {
  this.chargerProduit();
  }


chargerProduit(){this.ps.listeProduit().subscribe(prodes => {
      console.log(prodes);
      this.produits=prodes;
    });
  }

Supprimer(p : produit){


    this.ps.supprimer(p.id as number).subscribe( () => {
   console.log('raho tneha');
    this.chargerProduit();
    } );
  }

Modifier(p : produit){

}
}
