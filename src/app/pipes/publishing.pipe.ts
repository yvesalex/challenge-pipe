import { inject, Pipe, PipeTransform } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { Subject, Subscription } from "rxjs";

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo('en-US');

@Pipe({
    name: "publishing",
    standalone: true,
    pure: false
})
export class PublishingPipe implements PipeTransform {
    translate: TranslateService = inject(TranslateService);

    transform(value: string): string {
        let pubDate = new Date(value);
        let now = new Date();
        let nbYears = now.getFullYear() - pubDate.getFullYear();
        let nbMonths = now.getMonth() - pubDate.getMonth();
        if (nbMonths <= 0) {
            nbMonths = 12 - (pubDate.getMonth() - now.getMonth());
            nbYears--;
        }
        
        let years = nbYears > 0 ? nbYears == 1 ? `1 ${this.translate.instant("year")}` : `${nbYears} ${this.translate.instant("years")}` : '';
        let months = nbMonths > 0 ? nbMonths == 1 ? `1 ${this.translate.instant("month")}` : `${nbMonths} ${this.translate.instant("months")}` : '';
        let result = '';
        if (years != '') {
            if (months != '')
                result = `${years} ${this.translate.instant("and")} ${months}`;
            else result = years;
        }
        else {
            if (months != '')
                result = months;
            else result = this.translate.instant("today");
        }
        result = result != '' ? `${result} ${this.translate.instant("ago")}` : '';
        return this.getTranslation(result);
    }

    getTranslation(value: string): string {
        if (!value || value.length <= 0) return "";
        let finalResult: string = "";
        let components: string[] = value.split(" ");
        components.forEach((val: any) => {
            if (isNaN(val)) finalResult += ` ${this.translate.instant(val)}`;
            else finalResult += ` ${val}`;
        });
        return finalResult;
    }
}