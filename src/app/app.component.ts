import { Component, inject, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { TITLE } from './config/constants';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FooterComponent, TranslateModule, FormsModule, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "test";
  lang = "en";
  translate: TranslateService = inject(TranslateService);

  ngOnInit() {
    this.translate.addLangs(['en', 'pl']);
    this.translate.use('en');
  }

  switchLang(lang: 'en' | 'pl') {
    this.lang = lang;
    this.translate.use(this.lang);
  }
}
