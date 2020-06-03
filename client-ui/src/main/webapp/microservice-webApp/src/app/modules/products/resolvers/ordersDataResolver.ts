import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {catchError} from "rxjs/operators";
import {empty} from "rxjs";
import {NzMessageService} from "ng-zorro-antd";
import {OrdersService} from "../services/orders.service";

@Injectable()
export class OrdersDataResolver implements Resolve<any> {

  constructor(private ordersService: OrdersService,
              private msg: NzMessageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.ordersService.getAllOrders().pipe(
      catchError(err => {
        this.msg.error(err.error.message);
        return empty();
      })
    )
      ;
  }
}
