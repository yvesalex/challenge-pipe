import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BASE_URL } from "../config/constants";
import { Observable } from "rxjs";
import { Product } from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    http: HttpClient = inject(HttpClient);

    getAllProducts(): Observable<Product[]> {
        let url = `${BASE_URL}/products`;
        return this.http.get<Product[]>(url);
    }

    getAllCategories(): Observable<string[]> {
        let url = `${BASE_URL}/products/categories`;
        return this.http.get<string[]>(url);
    }
}