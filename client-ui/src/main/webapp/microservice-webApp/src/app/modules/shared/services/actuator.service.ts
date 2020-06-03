import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActuatorService {

  constructor(private http: HttpClient) {
  }

  refreshProperties(): Observable<any> {
    return this.http.post(environment.endpoints.ms_products + 'actuator/refresh', {});
  }
}
