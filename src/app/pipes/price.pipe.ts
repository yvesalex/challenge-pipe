import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "pricefix",
    standalone: true,
    pure:true
})
export class PricePipe implements PipeTransform {
    transform(value: string): string {
        let priceNumber = Number.parseFloat(value);
        return (priceNumber - Math.floor(priceNumber) == 0) ?`$${Math.floor(priceNumber)}` : `$${value}`;
    }
}