import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "short",
    standalone: true,
    pure: true
})
export class ShortenerPipe implements PipeTransform {
    transform(value: string):string {
        return value.length <= 10 ? value : `${value.substring(0, 9)}...`;
    }
}