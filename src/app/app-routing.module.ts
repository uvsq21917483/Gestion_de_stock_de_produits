import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { WerriliKolchComponent } from './werrili-kolch/werrili-kolch.component';
import { ZidHabaComponent } from './zid-haba/zid-haba.component';
import { SeggemhaComponent } from './seggemha/seggemha.component';
import {gestionCatsComponent} from './gestionCats/gestionCats.component';
import { RechParCatoComponent } from './rech-par-cato/rech-par-cato.component';
import { RechparnomComponent } from './rechparnom/rechparnom.component';
const routes: Routes = [
  { path : "produits" , component : ProduitComponent},
  { path : "zidHaba" , component : ZidHabaComponent},
  { path : "werriliKolch" , component : WerriliKolchComponent},
  { path : "" , redirectTo :"produits", pathMatch: "full"},
  { path : "seggemha/:id", component :SeggemhaComponent},
  {path : "gestionCats", component : gestionCatsComponent},
  {path : "RechercheParCategory", component : RechParCatoComponent},
  {path: "rechparnom" , component : RechparnomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
