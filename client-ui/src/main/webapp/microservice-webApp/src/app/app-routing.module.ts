import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MsProductsBootstrap} from "./modules/shared/resolvers/MsProductsBootstrap";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {
    path: 'welcome',
    resolve: {bootstrap: MsProductsBootstrap},
    loadChildren: () => import('./modules/products/welcome.module').then(m => m.WelcomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
