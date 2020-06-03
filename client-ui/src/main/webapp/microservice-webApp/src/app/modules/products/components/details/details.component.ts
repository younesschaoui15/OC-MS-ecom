import {Component, OnInit} from '@angular/core';
import {Order} from "../../models/Order";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {OrdersService} from "../../services/orders.service";
import {NzMessageService} from "ng-zorro-antd";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: Product;
  order: Order;

  constructor(private productsService: ProductsService,
              private ordersService: OrdersService,
              private route: ActivatedRoute,
              private msg: NzMessageService) {
  }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('productId');
    // this.productsService.getProductDetails(id).subscribe(p => this.product = p);
    this.product = this.route.snapshot.data['product'];
    /*Order details*/
    this.order = new Order(null, this.product.id, new Date(Date.now()), null, false);
  }

  onOrder() {
    this.ordersService.passOrder(this.order).subscribe(data => {
      console.log('#1\n Order: ', data);
      this.msg.success('Order passed successfully.');
    }, err => {
      this.msg.error(err.error.message);
    });
  }
}
