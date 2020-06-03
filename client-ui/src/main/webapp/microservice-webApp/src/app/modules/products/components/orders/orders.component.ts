import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Order} from "../../models/Order";
import {OrdersService} from "../../services/orders.service";
import {ActivatedRoute} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd";
import {PaymentService} from "../../services/payment.service";
import {Payment} from "../../models/Payment";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/Product";
import {HttpStatus} from "../../../shared/enums/HttpStatus";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  orders: Order[];
  _payment = new Payment();
  _isVisible = false;

  constructor(private ordersService: OrdersService,
              private paymentService: PaymentService,
              private productsService: ProductsService,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private msg: NzMessageService) {
  }

  ngOnInit(): void {
    this.orders = this.route.snapshot.data['orders'] || [];
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  onPayment() {
    this.paymentService.payOrder(this._payment).subscribe(res => {
      console.log('#1\n Payment: ', res);
      this._isVisible = false;
      this.orders.find(o => o.id == this._payment.idCommande).commandePayee = true;
      this._payment = new Payment();
      this.msg.success('Order has been paid.');
    }, err => {
      this.msg.error(err.message);
      if (err && err.status == HttpStatus.CONFLICT) {
        this._isVisible = false;
        this.orders.find(o => o.id == this._payment.idCommande).commandePayee = true;
        this._payment = new Payment();
      }
    })
  }

  async onShowPaymentModal(order: Order) {
    this._isVisible = true;
    this._payment.idCommande = order.id;
    const product: Product = await this.productsService.getProductDetails(order.productId).toPromise();
    this._payment.montant = order.quantite * product.prix;
  }

  onInitPayment() {
    this._isVisible = false;
    this._payment = new Payment();
  }
}
