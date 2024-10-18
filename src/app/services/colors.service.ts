import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BASE_URL } from "../config/constants";
import { ColorModel } from "../models/color.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ColorService{ 
    http: HttpClient = inject(HttpClient);

    getColors(): Observable<ColorModel[]> {
        return this.http.get<ColorModel[]>(BASE_URL);    
    }

    save(color: ColorModel): Observable<ColorModel> {
        return this.http.post<ColorModel>(BASE_URL, JSON.stringify(color));
    }

    numberToRGB(color: string) {
        const r = parseInt(color.substring(1, 3), 16);
        const g = parseInt(color.substring(3, 5), 16);
        const b = parseInt(color.substring(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    checkIfColorIsRedEnough(color: string) {
        const r = parseInt(color.substring(1, 3), 16);
        const g = parseInt(color.substring(3, 5), 16);
        const b = parseInt(color.substring(5, 7), 16);
        return r > g + b;
    }
}