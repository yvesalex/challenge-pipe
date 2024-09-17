import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CatsService {
    constructor(private http: HttpClient) {
        
    }

    getRandomCat(): Observable<any> {
        let url = `https://catfact.ninja/fact`;
        return this.http.get(url);
    }
}