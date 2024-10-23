import { Pipe, PipeTransform } from "@angular/core";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo('en-US');

@Pipe({
    name: "publishing",
    standalone: true,
    pure: true
})
export class PublishingPipe implements PipeTransform {
    transform(value: string): string {
        let pubDate = new Date(value);
        let now = new Date();
        let nbYears = now.getFullYear() - pubDate.getFullYear();
        let nbMonths = now.getMonth() - pubDate.getMonth();
        if (nbMonths <= 0) {
            nbMonths = 12 - (pubDate.getMonth() - now.getMonth());
            nbYears--;
        }
        let years = nbYears > 0 ? nbYears == 1 ? '1 year' : `${nbYears} years` : '';
        let months = nbMonths > 0 ? nbMonths == 1 ? '1 month' : `${nbMonths} months` : '';
        let result = '';
        if (years != '') {
            if (months != '')
                result = `${years} and ${months}`;
            else result = years;
        }
        else {
            if (months != '')
                result = months;
            else result = 'today';
        }
        result = result != '' ? `${result} ago` : '';
        return result;
    }
}