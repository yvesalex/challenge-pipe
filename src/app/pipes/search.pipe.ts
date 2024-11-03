import { inject, Pipe, PipeTransform } from "@angular/core";
import { SearchService } from "../services/search.service";
import { SEARCH_TEXT_LIMIT } from "../config/constants";

@Pipe({
    name: "search",
    standalone: true,
    pure: true
})
export class SearchPipe implements PipeTransform {
    searchService: SearchService = inject(SearchService);

    transform(value: string, searchText: string) {
        let parts = value.replaceAll('*', '').split(' ');
        for (let index = 0; index < parts.length; index++) {
            let element = parts[index];
            parts[index] = (element.toLowerCase().includes(searchText) && searchText.length >= SEARCH_TEXT_LIMIT) ? `*${element}*` : element;
        }
        return parts.join(' ');
    }
}