import { Component, computed, inject, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TITLE } from '../config/constants';
import { NgStyle } from '@angular/common';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product.model';
import { ShortenerPipe } from '../pipes/shortener.pipe';
import { ImagePipe } from '../pipes/image.pipe';
import { PricePipe } from '../pipes/price.pipe';
import { PublishingPipe } from '../pipes/publishing.pipe';
import { CodeFormatter } from '../pipes/code-formatter.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, ShortenerPipe, ImagePipe, PricePipe, PublishingPipe, CodeFormatter, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = "test";
  productService: ProductService = inject(ProductService);
  translate: TranslateService = inject(TranslateService);
  products: Signal<ProductModel[]> = toSignal(this.productService.getAll(), {
    initialValue: []
  });  
}
