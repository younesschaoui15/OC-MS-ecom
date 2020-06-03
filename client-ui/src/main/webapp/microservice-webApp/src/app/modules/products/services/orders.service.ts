import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  public passOrder(order) {
    return this.http.post(environment.endpoints.ms_orders + 'commandes', order);
  }

  getAllOrders() {
    /*Add pagination later*/
    return this.http.get(environment.endpoints.ms_orders + 'commandes');
  }
}
