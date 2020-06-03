import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {DetailsComponent} from "./components/details/details.component";
import {ProductDetailsResolver} from "./resolvers/productDetailsResolver";
import {OrdersComponent} from "./components/orders/orders.component";
import {OrdersDataResolver} from "./resolvers/ordersDataResolver";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {
    path: 'p/:productId',
    component: DetailsComponent,
    resolve: {product: ProductDetailsResolver}
  },
  {
    path: 'orders',
    component: OrdersComponent,
    resolve: {orders: OrdersDataResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {
}
