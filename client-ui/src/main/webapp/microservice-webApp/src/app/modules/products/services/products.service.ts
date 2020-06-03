import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../models/Product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.endpoints.ms_products + 'Produits').pipe(
      map((data: any) => data.content)
    );
  }

  getProductDetails(id: string | number): Observable<Product> {
    return this.http.get<Product>(environment.endpoints.ms_products + 'Produits/' + id);
  }
}
