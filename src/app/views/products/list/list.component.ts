import { Component } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Product } from '../../../models/product';
import { ProductComponent } from "../../../shared/product/product.component";
import { Observable } from 'rxjs';
import { AsyncPipe, NgForOf } from '@angular/common';
import { AppComponent } from '../../../app.component';
import { TITLE } from '../../../config/constants';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, AsyncPipe, ProductComponent, HeaderComponent, NgForOf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public products$: Observable<Product[]> = new Observable();
  constructor(private productService: ProductService){}

  ngOnInit() {
    this.products$ = this.productService.getAllProducts();
  }
}
