import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {catchError} from "rxjs/operators";
import {empty} from "rxjs";
import {ProductsService} from "../services/products.service";
import {NzMessageService} from "ng-zorro-antd";

@Injectable()
export class ProductDetailsResolver implements Resolve<any> {

  constructor(private productsService: ProductsService,
              private msg: NzMessageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const _id = route.paramMap.get('productId');
    return this.productsService.getProductDetails(_id).pipe(
      catchError(err => {
        this.msg.error(err.error.message);
        return empty();
      })
    )
      ;
  }
}
