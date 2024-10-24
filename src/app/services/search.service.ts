import { EventEmitter, Injectable, Output, signal, WritableSignal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    public onSearch: WritableSignal<string> = signal(''); 
}