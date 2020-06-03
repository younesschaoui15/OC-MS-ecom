import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {catchError} from "rxjs/operators";
import {empty} from "rxjs";
import {NzMessageService} from "ng-zorro-antd";
import {ActuatorService} from "../services/actuator.service";

@Injectable()
export class MsProductsBootstrap implements Resolve<any> {

  constructor(private actuatorService: ActuatorService,
              private msg: NzMessageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.actuatorService.refreshProperties().pipe(
      catchError(err => {
        this.msg.error(err.error.message);
        return empty();
      })
    )
      ;
  }
}
