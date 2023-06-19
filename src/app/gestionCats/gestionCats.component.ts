import { Component } from '@angular/core';
import { category } from '../model/category.model';
import { ProduitService } from '../service/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-cats',
  templateUrl: './gestionCats.component.html',
  styleUrls: ['./gestionCats.component.css']
})
export class gestionCatsComponent {
  NewCat = new category;
  LesCatos!: category[];
  constructor(private aR: ActivatedRoute,
    private ps: ProduitService,
    private rou: Router) {
  }

  ngOnInit(): void {
    this.chargerCats();
  }

  chargerCats() {
    this.ps.listeCats().subscribe(c => {
      this.LesCatos = c._embedded.categories;
    });
  }


  Supprimiha(caca: category) {
    this.ps.suppCat(caca.idcat as number).subscribe(() => {
      console.log(caca);
      console.log("raho yetnaha nrmlm");
      this.chargerCats();
    });
  }

  zidCato() {
    this.ps.addCat(this.NewCat).subscribe(caty => {
      console.log(caty);
      location.reload();
    })
  }
}
