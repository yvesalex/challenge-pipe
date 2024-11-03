import { ChangeDetectionStrategy, Component, computed, inject, Signal, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IMAGE_URL } from '../config/constants';
import { NgStyle, UpperCasePipe } from '@angular/common';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product.model';
import { ShortenerPipe } from '../pipes/shortener.pipe';
import { ImagePipe } from '../pipes/image.pipe';
import { PricePipe } from '../pipes/price.pipe';
import { PublishingPipe } from '../pipes/publishing.pipe';
import { CodeFormatter } from '../pipes/code-formatter.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SearchPipe } from '../pipes/search.pipe';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, ShortenerPipe, ImagePipe, PricePipe, PublishingPipe, SearchPipe, CodeFormatter, TranslateModule, UpperCasePipe],
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
}
