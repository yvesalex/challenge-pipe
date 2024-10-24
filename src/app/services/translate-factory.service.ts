import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function createTranslateLoader(http:HttpClient) {
    return new TranslateHttpLoader(http, './public/i18n/', '.json');
}
 
export const provideTranslation = () => ({
    defaultLanguage: 'en',
    useDefaultLang: true,
    loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
    },
});