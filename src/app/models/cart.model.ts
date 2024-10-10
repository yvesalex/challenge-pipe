import { ProductModel } from "./product.model";

export interface CartModel{
    id: number;
    userId: string;
    date: string;
    products: ProductModel[];
}