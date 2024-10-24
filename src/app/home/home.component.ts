import { ChangeDetectionStrategy, Component, computed, inject, Signal, signal, SimpleChanges } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IMAGE_URL, TITLE } from '../config/constants';
import { NgStyle } from '@angular/common';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product.model';
import { ShortenerPipe } from '../pipes/shortener.pipe';
import { ImagePipe } from '../pipes/image.pipe';
import { PricePipe } from '../pipes/price.pipe';
import { PublishingPipe } from '../pipes/publishing.pipe';
import { CodeFormatter } from '../pipes/code-formatter.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { SearchPipe } from '../pipes/search.pipe';

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
  publish: PublishingPipe = inject(PublishingPipe);
  products: Signal<ProductModel[]> = toSignal(this.productService.getAll(), {
    initialValue: []
  });

  transformPublishingDate(date: string): string {
    return this.publish.transform(date);
  }
}
