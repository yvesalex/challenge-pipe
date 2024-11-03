import { Component, EventEmitter, inject, Signal, signal, WritableSignal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { SearchService } from './services/search.service';
import { toSignal } from '@angular/core/rxjs-interop';

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
  onLangChange: WritableSignal<string> = signal('en');

  ngOnInit() {
    this.translate.addLangs(['en', 'pl']);
    this.translate.use('en');
  }

  switchLang(lang: 'en' | 'pl') {
    this.lang = lang;
    this.translate.use(this.lang);
    this.onLangChange.set(lang);
  }

  search(event: any) {
    this.searchText = event.target.value;
    this.searchService.onSearch.set(this.searchText);
  }
}
