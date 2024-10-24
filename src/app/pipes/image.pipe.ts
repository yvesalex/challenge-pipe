import { Pipe, PipeTransform } from "@angular/core";
import { IMAGE_URL } from "../config/constants";

@Pipe({
    name: "imagefix",
    standalone: true,
    pure: true
})
export class ImagePipe implements PipeTransform {
    transform(value: string): string {
        let imageUrl = value == undefined || value.length <= 0 ? IMAGE_URL : value;
        return imageUrl;
    }
}