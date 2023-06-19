import { Injectable } from '@angular/core';
import { produit } from '../model/produit.model';
import { category } from '../model/category.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { categoryWrapped } from '../model/CategoryWrapper';

const httpOptions ={
  Headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  apiUrl : string = 'http://localhost:8099/product/api';
  apiUrlCat : string = 'http://localhost:8099/product/cat';

  produits! : produit [];
  cats! : category[];
  prod? : produit;
  // cato? : category;
  constructor( private http : HttpClient) {

  }

  listeProduit():Observable<produit[]>{

  return this.http.get<produit[]>(this.apiUrl);

  }


   addProduit( pro : produit):Observable<produit>{
    return this.http.post<produit>(this.apiUrl , pro );
   }

   supprimer( liidd : number){
     const url = `${this.apiUrl}/${liidd}` ;
     return this.http.delete<produit>(url);
  }

  suppCat(idcato : number){
    const url = `http://localhost:8099/product/api/cat/${idcato}` ;
    return this.http.delete<category>(url);
  }

   CpnsulterProduit(id : Number){
    const url = `${this.apiUrl}/${id}` ;
    return this.http.get<produit>(url);
  }

  listeCats():Observable<categoryWrapped>{

    return this.http.get<categoryWrapped>(this.apiUrlCat);

  }

  FBC(idcato :number):Observable<produit[]>{
    const url = `${this.apiUrl}/klch/${idcato}`
    return this.http.get<produit[]>(url);
  }


  addCat(ca : category ):Observable<category>{
    return this.http.post<category>(this.apiUrlCat , ca);
  }


  updateProduit(p : produit):Observable<produit> {
    return    this.http.put<produit>(this.apiUrl, p);
  }

  FBNC(nom : string):Observable<produit[]>{
    const url = `${this.apiUrl}/PBN/${nom}`;
    console.log(url);
    return this.http.get<produit[]>(url);
  }

}
