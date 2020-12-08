import {ProductOrder} from "../models/product-order.model";
import {Subject} from "rxjs/internal/Subject";
import {ProductOrders} from "../models/product-orders.model";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import { ApiBaseService } from "./api-base.service";
import { HttpClientService } from "./http.client.service";
import { OrderResponse } from "../models/result.model";
declare var require: any;

@Injectable()
export class VeganService extends ApiBaseService {
    //private productsUrl = "http://localhost:8080/api/products";
    private ordersUrl = "http://localhost:8080/api/orders";

    private productOrder: ProductOrder;
    private orders: ProductOrders = new ProductOrders();

    private productOrderSubject = new Subject();
    private ordersSubject = new Subject();
    private totalSubject = new Subject();

    private total: number;

    ProductOrderChanged = this.productOrderSubject.asObservable();
    OrdersChanged = this.ordersSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();

    constructor(private http: HttpClientService) {
        super();
    }

    getAllProducts() {
        //var data = require('src/vegetables.json');
        //console.log("Json data : ", JSON.stringify(data));
        //return data;
       return this.http.get(this.api.getVegetables);
                
    }

    saveOrder(order: ProductOrders) {
        return this.http.post(this.api.placeOrder, null, order);
        //this.router.navigate(['/orders']); 
    }

    set SelectedProductOrder(value: ProductOrder) {
        this.productOrder = value;
        this.productOrderSubject.next();
    }

    get SelectedProductOrder() {
        return this.productOrder;
    }

    set ProductOrders(value: ProductOrders) {
        this.orders = value;
        this.ordersSubject.next();
    }

    get ProductOrders() {
        return this.orders;
    }

    get Total() {
        return this.total;
    }

    set Total(value: number) {
        this.total = value;
        this.totalSubject.next();
    }

    placeOrder(productOrders : ProductOrders){
        return this.http.post(this.api.placeOrder,null,productOrders);
    }
}
