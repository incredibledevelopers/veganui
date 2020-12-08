import {Component, OnInit} from '@angular/core';
import {ProductOrders} from "../models/product-orders.model";
import {Subscription} from "rxjs/internal/Subscription";
import {VeganService} from "../services/VeganService";
import { BasePageComponent } from '../base-page.component';
import { Title } from '@angular/platform-browser';
import { VEGAN_SETUP } from '../models/vegan-setup.model';
import { CategorySharedService } from '../services/category.shared.service';
import { ProductOrder } from '../models/product-order.model';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent extends BasePageComponent implements OnInit {
    orders: ProductOrders;
    total: number;
    paid: boolean;
    sub: Subscription;
    isError : boolean = false;
    message : string = "";
    success : boolean = false;
    deliveryCentreAddress = VEGAN_SETUP.deliveryCentreAddress;
    deliveryCharges = VEGAN_SETUP.deliveryCharges;
    devlieryTimeMessages = VEGAN_SETUP.devlieryTimeMessages;
    
    
    constructor(private veganService: VeganService, private title : Title,
        private categoeySharedService : CategorySharedService) {
        super(title);
        super.setTitle("Vegetables");
        this.orders = this.veganService.ProductOrders;
    }

    ngOnInit() {
        this.paid = false;
        this.sub = this.veganService.OrdersChanged.subscribe(() => {
            this.orders = this.veganService.ProductOrders;
        });
        this.loadTotal();
    }

    removeItem(order : ProductOrder, index: number){
        console.log(order.product.price+" "+order.quantity);
        console.log("index = "+index);
        this.total = this.total - (order.product.price*order.quantity); 
        this.orders.productOrders.splice(index, 1);
    }

    payNew(checkoutForm){
        this.paid = true;
        this.orders.mobileNumber = checkoutForm.mobileNumber;
        this.orders.address = checkoutForm.address;
        this.orders.customerName = checkoutForm.customerName;
        this.removeAuditData();
        let status : boolean;
        let message : string;    
        this.veganService.placeOrder(this.orders)
            .subscribe((response) =>{
                status = response.status;
                message = response.message;
                this.renderRespnse(status,message);
            },
            error => {
                console.error(error.message);
            }
        );
        this.resetFormFields();
    }

    resetFormFields(){
        this.orders.mobileNumber = "";
        this.orders.address = "";
        this.orders.customerName = "";
    }

    renderRespnse(status, message){
        console.log("result ***"+status+" "+message);
        if(status){
            this.paid = true;
            this.success = true;
            this.isError = false;
        }else{
            this.isError = true;
            this.success = false;
        }
        this.message = message;
    }

    removeAuditData(){
        this.orders.productOrders.forEach(productOrder => {
            delete productOrder.product['id'];
            delete productOrder.product['available'];
            delete productOrder.product['pictureUrl']
        });
    }

    loadTotal() {
        this.sub = this.veganService.TotalChanged.subscribe(() => {
            this.total = this.veganService.Total;
        });
    }
}
