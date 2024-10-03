import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { BASE_URL } from "../config/constants";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    http: HttpClient = inject(HttpClient);

    getAllUsers(): Observable<UserModel[]> {
        let url = `${BASE_URL}/users`;
        return this.http.get<UserModel[]>(url);
    }
}