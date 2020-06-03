import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Payment} from "../models/Payment";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  public payOrder(payment: Payment) {
    return this.http.post(environment.endpoints.ms_payment + 'paiement', payment).pipe(
      catchError(err => of(err.error))
    );
  }
}
