import { Component, EventEmitter, inject, NgModule, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { SEARCH_TEXT_LIMIT, TITLE } from './config/constants';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { SearchService } from './services/search.service';

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
  searchText = "";
  translate: TranslateService = inject(TranslateService);
  searchService: SearchService = inject(SearchService);

  ngOnInit() {
    this.translate.addLangs(['en', 'pl']);
    this.translate.use('en');
  }

  switchLang(lang: 'en' | 'pl') {
    this.lang = lang;
    this.translate.use(this.lang);
  }

  search(event: any) {
    this.searchText = event.target.value;
    if (this.searchText.length >= SEARCH_TEXT_LIMIT) {
      this.searchService.onSearch.update(() => this.searchText);
    }
    else {
      this.searchService.onSearch.set('');
    }
  }
}
