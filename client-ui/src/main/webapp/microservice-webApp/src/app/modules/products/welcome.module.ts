import {NgModule} from '@angular/core';
import {WelcomeRoutingModule} from './welcome-routing.module';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {DetailsComponent} from './components/details/details.component';
import {SharedModule} from "../shared/shared.module";
import {ProductDetailsResolver} from "./resolvers/productDetailsResolver";
import {OrdersComponent} from './components/orders/orders.component';
import {OrdersDataResolver} from "./resolvers/ordersDataResolver";

@NgModule({
  imports: [
    WelcomeRoutingModule,
    SharedModule
  ],
  declarations: [WelcomeComponent, DetailsComponent, OrdersComponent],
  exports: [WelcomeComponent],
  providers: [
    ProductDetailsResolver,
    OrdersDataResolver,
  ]
})
export class WelcomeModule {
}
