import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {IconsProviderModule} from "../../icons-provider.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzButtonModule} from 'ng-zorro-antd/button';
import {FormsModule} from "@angular/forms";
import {NzListModule} from 'ng-zorro-antd/list';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzInputModule} from 'ng-zorro-antd/input';
import {MsProductsBootstrap} from "./resolvers/MsProductsBootstrap";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    CommonModule,
    NzMessageModule,
    NzSelectModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzListModule,
    NzModalModule,
    NzInputModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    CommonModule,
    NzMessageModule,
    NzSelectModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzListModule,
    NzModalModule,
    NzInputModule,
  ],
  providers: [
    MsProductsBootstrap
  ]
})
export class SharedModule {
}
