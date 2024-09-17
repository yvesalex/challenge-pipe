import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CatsService {
    private url = `https://catfact.ninja/fact`;
    constructor(private http: HttpClient) {
    }

    getRandomCat(): Observable<any> {
        return this.http.get(this.url);
    }
}