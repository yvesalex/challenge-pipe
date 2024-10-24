import { inject, Pipe, PipeTransform } from "@angular/core";
import { SearchService } from "../services/search.service";

@Pipe({
    name: "search",
    standalone: true,
    pure: true
})
export class SearchPipe implements PipeTransform {
    searchService: SearchService = inject(SearchService);

    transform(value: string) {
        let searchText = this.searchService.onSearch();
        return !value.includes(searchText) || searchText.trim() == ""  ? value : `*${value}*`;
    }
}