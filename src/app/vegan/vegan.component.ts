import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrdersComponent} from "./orders/orders.component";
import { CategorySharedService } from './services/category.shared.service';
import { VEGAN_SETUP } from './models/vegan-setup.model';

@Component({
    selector: 'app-ecommerce',
    templateUrl: './vegan.component.html',
    styleUrls: ['./vegan.component.css']
})
export class VeganComponent implements OnInit {
    private collapsed = true;
    orderFinished = false;
    contactNumbers = VEGAN_SETUP.contactNumbers;

    @ViewChild('productsC')
    productsC: ProductsComponent;

    @ViewChild('shoppingCartC')
    shoppingCartC: ShoppingCartComponent;

    @ViewChild('ordersC')
    ordersC: OrdersComponent;

    constructor(private categorySharedService : CategorySharedService) {}

    ngOnInit() {
    }

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }

    getRegularVegetables(){
        this.categorySharedService.sendItemCategory('RV');
    }

    getLeafyVegetables(){
        this.categorySharedService.sendItemCategory('LV');
    }

    getCutVegetables(){
        this.categorySharedService.sendItemCategory('CV');
    }

    getFruits(){
        this.categorySharedService.sendItemCategory('FR');
    }

    getExotic(){
        this.categorySharedService.sendItemCategory('EX');
    }

    getDal(){
        this.categorySharedService.sendItemCategory('DL');
    }

    aboutUs(){
        this.categorySharedService.sendItemCategory('ABT-US');
    }

    reset() {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
    }
}
