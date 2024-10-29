import { ChangeDetectionStrategy, Component, computed, inject, Signal, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IMAGE_URL, SEARCH_TEXT_LIMIT, TITLE } from '../config/constants';
import { NgStyle } from '@angular/common';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product.model';
import { ShortenerPipe } from '../pipes/shortener.pipe';
import { ImagePipe } from '../pipes/image.pipe';
import { PricePipe } from '../pipes/price.pipe';
import { PublishingPipe } from '../pipes/publishing.pipe';
import { CodeFormatter } from '../pipes/code-formatter.pipe';
import { LangChangeEvent, TranslateModule, TranslatePipe, TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { SearchPipe } from '../pipes/search.pipe';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, ShortenerPipe, ImagePipe, PricePipe, PublishingPipe, SearchPipe, CodeFormatter, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = "test";
  imgUrl: string = IMAGE_URL;
  productService: ProductService = inject(ProductService);
  searchService: SearchService = inject(SearchService);
  translateService: TranslateService = inject(TranslateService);
  publish: PublishingPipe = inject(PublishingPipe);
  codeFormatter: CodeFormatter = inject(CodeFormatter);
  shortener: ShortenerPipe = inject(ShortenerPipe);
  products: Signal<ProductModel[]> = toSignal(this.productService.getAll(),
    { initialValue: [] });
  searchText: WritableSignal<string> = signal('');
  visibleProducts: Signal<ProductModel[]> = computed(() => []);

  ngOnInit() {
    this.translateService.onLangChange
      .subscribe((event: LangChangeEvent) => this.setVisibleProducts());
  }

  setVisibleProducts() {
    this.visibleProducts = computed(() => {
      return this.products().map((p: ProductModel) => {
        let searchText = this.searchService.onSearch().toLowerCase ();
        p.name = this.surroundWord(p.name, searchText);
        p.price = this.surroundWord(p.price, searchText);
        p.publishingDate = this.translateService.instant(this.publish.transform(p.publishedAt));
        p.publishingDate = this.surroundWord(p.publishingDate, searchText);
        p.code = this.codeFormatter.transform(p.id, p.name);
        p.code = this.surroundWord(p.code, searchText);
        return p;
      });
    });
  }

  surroundWord(phrase: string, searchText: string): string {
    let parts = phrase.replaceAll('*', '').split(' ');
    for (let index = 0; index < parts.length; index++) {
      let element = parts[index];
      parts[index] = (element.toLowerCase().includes(searchText) && searchText.length >= SEARCH_TEXT_LIMIT) ? `*${element}*` : element;
    }
    return parts.join(' ');
  }
}
