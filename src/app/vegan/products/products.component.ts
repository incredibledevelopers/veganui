import {Component, OnInit} from '@angular/core';
import {ProductOrder} from "../models/product-order.model";
import {VeganService} from "../services/VeganService";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductOrders} from "../models/product-orders.model";
import {Product} from "../models/product.model";
import { BasePageComponent } from '../base-page.component';
import { Title } from '@angular/platform-browser';
import { CategorySharedService } from '../services/category.shared.service';
import { VEGAN_SETUP } from '../models/vegan-setup.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BasePageComponent implements OnInit {
    productOrders: ProductOrder[] = [];
    products: Product[] = [];
    selectedProductOrder: ProductOrder;
    private shoppingCartOrders: ProductOrders;
    sub: Subscription;
    productSelected: boolean = false;
    itemCategories  = VEGAN_SETUP.categories;
    gmsUnits = VEGAN_SETUP.units_gms;
    pcsUnits = VEGAN_SETUP.units_pcs;
    offers = VEGAN_SETUP.offers;
    deliveryCenterAddress = VEGAN_SETUP.deliveryCentreAddress;
    contactNumbers = VEGAN_SETUP.contactNumbers;
    showAboutUs : boolean = false;
    
    constructor(private veganService: VeganService, 
        private categorySharedService:CategorySharedService,
        private title : Title) {
        super(title);
        super.setTitle("Vegetable Products");
        this.categorySharedService.getItemCategory().subscribe(id => {
            this.activateItemCategory(id);
        })
    }

    activateItemCategory(category : string){
        console.log("subject ="+category);
        this.showAboutUs = false;
        this.itemCategories.forEach(itemCategory => {
            itemCategory.noItems = false;
            if(itemCategory.category === category){
                itemCategory.active = true;
                if(itemCategory.items.length === 0){
                    itemCategory.noItems = true;
                }
            }else if(category === 'ABT-US'){
                this.showAboutUs = true;
                itemCategory.active = false;
            }else{
                itemCategory.active = false;
            }
        });
    }

    getStyle(category : string){
       return '';
    }
    
    ngOnInit() {
        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
    }

    addToCart(order: ProductOrder) {
        this.veganService.SelectedProductOrder = order;
        this.selectedProductOrder = this.veganService.SelectedProductOrder;
        this.productSelected = true;
    }

    removeFromCart(productOrder: ProductOrder) {
        let index = this.getProductIndex(productOrder.product);
        if (index > -1) {
            this.shoppingCartOrders.productOrders.splice(
                this.getProductIndex(productOrder.product), 1);
        }
        this.veganService.ProductOrders = this.shoppingCartOrders;
        this.shoppingCartOrders = this.veganService.ProductOrders;
        this.productSelected = false;
    }

    getProductIndex(product: Product): number {
        return this.veganService.ProductOrders.productOrders.findIndex(
            value => value.product === product);
    }

    isProductSelected(product: Product): boolean {
        return this.getProductIndex(product) > -1;
    }

    loadProducts() {
        this.veganService.getAllProducts()
            .subscribe(
                (products: any[]) => {
                    this.products = products;
                    this.products.forEach(product => {
                        this.productOrders.push(new ProductOrder(product, 0));
                        this.itemCategories.forEach(itemCategory => {
                            if(itemCategory.category === product.itemCategory){
                                itemCategory.items.push(new ProductOrder(product, 0));
                            }
                        });
                        /*for(let i = 0; i < this.itemCategories.length; i++){
                            let itemCategory = this.itemCategories[i]; 
                            if(itemCategory.category === product.itemCategory){
                                itemCategory.items.push(new ProductOrder(product, 0));
                            }
                        }*/
                    });
                    console.log(this.itemCategories);
                },
                (error) => console.log(error)
            );
        /*this.products = this.veganService.getAllProducts();
        this.products.forEach(product => {
            this.productOrders.push(new ProductOrder(product, 0));
        });*/    
    }

    loadOrders() {
        this.sub = this.veganService.OrdersChanged.subscribe(() => {
            this.shoppingCartOrders = this.veganService.ProductOrders;
        });
    }

    reset() {
        this.productOrders = [];
        this.loadProducts();
        this.veganService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
        this.itemCategories.forEach(itemCategory => {
            itemCategory.items = [];
        })
    }
}
