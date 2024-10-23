import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'codeformat',
    standalone: true,
    pure: true
})
export class CodeFormatter implements PipeTransform {
    transform(value: string, name: string): string {
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