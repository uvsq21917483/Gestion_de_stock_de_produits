import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from '../model/category.model';

@Component({
  selector: 'app-seggemha',
  templateUrl: './seggemha.component.html',
  styleUrls: ['./seggemha.component.css']
})
export class SeggemhaComponent implements OnInit {
  cp = new produit();
  categories!: category[];
  newIdCat!: String;
  constructor(private aR: ActivatedRoute,
    private ps: ProduitService,
    private rou: Router) {
  }
  ngOnInit(): void {
    this.ps.CpnsulterProduit(this.aR.snapshot.params['id']).subscribe
      (p => { this.cp = p; });
    this.ps.listeCats().subscribe(c => {
      this.categories = c._embedded.categories;
    });
    this.ps.CpnsulterProduit(this.aR.snapshot.params['id']).subscribe(
      prol => {
        this.cp=prol;
        this.newIdCat=this.cp.cat.nomCat;
      });

  }

  seggemha() {
    this.cp.cat = this.categories.find(caty => caty.nomCat == this.newIdCat)!;
    this.ps.updateProduit(this.cp).subscribe(pr => { this.rou.navigate(['produits']) }, (error) => { alert('probleme f tesgam'); }
    );
  }
}
