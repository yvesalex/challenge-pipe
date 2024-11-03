import { Pipe, PipeTransform } from "@angular/core";
import { ProductModel } from "../models/product.model";

@Pipe({
    name: 'codeformat',
    standalone: true,
    pure: true
})
export class CodeFormatter implements PipeTransform {
    transform(product: ProductModel): string {
        let value: string = product.id, name: string = product.name;
        let result = value.padStart(3, '00') ;
        let names = name.split(' ');
        let part2 = '';
        for (let index = 0; index < names.length; index++) {
            const element = names[index];
            part2 += element.charAt(0);
        }
        result += '-' + part2;
        return result;
    }
}