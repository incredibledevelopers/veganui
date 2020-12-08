import {ProductOrder} from "./product-order.model";

export class ProductOrders {
    mobileNumber : string;
    address : string;
    customerName : string;
    productOrders: ProductOrder[] = [];
}
