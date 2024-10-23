import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductModel } from "../models/product.model";
import { BASE_URL } from "../config/constants";

@Injectable({
    providedIn:'root'
})
export class ProductService {
    http: HttpClient = inject(HttpClient);

    getAll(): Observable<ProductModel[]>{
        return this.http.get<ProductModel[]>(BASE_URL);
    }
}