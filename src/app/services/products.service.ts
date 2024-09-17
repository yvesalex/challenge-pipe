import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../config/constants";
import { map, Observable } from "rxjs";
import { Product } from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http:HttpClient) {
        
    }

    getAllProducts(): Observable<any> {
        let url = `${BASE_URL}/products`;
        return this.http.get(url);
    }
}