import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { WerriliKolchComponent } from './werrili-kolch/werrili-kolch.component';
import { ZidHabaComponent } from './zid-haba/zid-haba.component';
import { SeggemhaComponent } from './seggemha/seggemha.component';

const routes: Routes = [
  { path : "produits" , component : ProduitComponent},
  { path : "zidHaba" , component : ZidHabaComponent},
  { path : "werriliKolch" , component : WerriliKolchComponent},
  { path : "" , redirectTo :"produits", pathMatch: "full"},
  { path : "seggemha/:id", component :SeggemhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
