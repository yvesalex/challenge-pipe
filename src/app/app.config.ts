import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { createTranslateLoader, provideTranslation } from './services/translate-factory.service';
import { PublishingPipe } from './pipes/publishing.pipe';
import { CodeFormatter } from './pipes/code-formatter.pipe';
import { ShortenerPipe } from './pipes/shortener.pipe';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot(provideTranslation())
    ),
    PublishingPipe,
    CodeFormatter,
    ShortenerPipe,
    TranslatePipe
  ]
};
