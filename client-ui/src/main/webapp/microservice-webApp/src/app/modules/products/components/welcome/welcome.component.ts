import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Observable} from "rxjs";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  _products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this._products$ = this.productsService.getAllProducts();
  }

}
