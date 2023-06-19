import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ZidHabaComponent } from './zid-haba/zid-haba.component';
import { WerriliKolchComponent } from './werrili-kolch/werrili-kolch.component';
import { FormsModule } from '@angular/forms';
import { SeggemhaComponent } from './seggemha/seggemha.component';
import { HttpClientModule } from '@angular/common/http';
import { gestionCatsComponent } from './gestionCats/gestionCats.component';
import { RechParCatoComponent } from './rech-par-cato/rech-par-cato.component';
import { RechparnomComponent } from './rechparnom/rechparnom.component';
import { SFilterPipe } from './sfilter.pipe';
import {  Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ZidHabaComponent,
    WerriliKolchComponent,
    SeggemhaComponent,
    gestionCatsComponent,
    RechParCatoComponent,
    RechparnomComponent,
    SFilterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
