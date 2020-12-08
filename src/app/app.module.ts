import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {VeganComponent} from './vegan/vegan.component';
import {ProductsComponent} from './vegan/products/products.component';
import {ShoppingCartComponent} from './vegan/shopping-cart/shopping-cart.component';
import {OrdersComponent} from './vegan/orders/orders.component';
import {VeganService} from "./vegan/services/VeganService";
import {HttpClientService} from "./vegan/services/http.client.service";
import { CategorySharedService } from './vegan/services/category.shared.service';
import { FooterComponent } from './vegan/footer/footer.component';
import { AboutUsComponent } from './vegan/about-us/about-us.component';

@NgModule({
    declarations: [
        AppComponent,
        VeganComponent,
        ProductsComponent,
        ShoppingCartComponent,
        OrdersComponent,
        FooterComponent,
        AboutUsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [VeganService,HttpClientService,CategorySharedService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
