import { inject, PipeTransform } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

export class TranslatePipe implements PipeTransform {
    translateService: TranslateService = inject(TranslateService);

    transform(value: string) {
        return this.translateService.instant(value);
    }
}