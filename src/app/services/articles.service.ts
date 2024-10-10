import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ArticleModel } from "../models/article.model";
import { BASE_URL } from "../config/constants";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    http: HttpClient = inject(HttpClient);
    
    getAll(): Observable<ArticleModel[]> {
        return this.http.get<ArticleModel[]>(BASE_URL);
    }
    
    getOne(id:number): Observable<ArticleModel> {
        let url = `${BASE_URL}/${id}`;
        return this.http.get<ArticleModel>(url);
    }
    
    update(article: ArticleModel) {
        return this.http.post(BASE_URL, JSON.stringify(article));
    }
}