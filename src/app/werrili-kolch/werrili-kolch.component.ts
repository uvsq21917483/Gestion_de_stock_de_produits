import { Component } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { produit } from '../model/produit.model';

@Component({
  selector: 'app-werrili-kolch',
  templateUrl: './werrili-kolch.component.html',
  styleUrls: ['./werrili-kolch.component.css']
})
export class WerriliKolchComponent {
  LesProduit! : produit[];


  // constructor(private produitService : ProduitService) {
  //  this.LesProduit= produitService.listeProduit();

  //   }
}
