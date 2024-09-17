import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CatsService } from '../../services/cats.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Fact } from '../../models/fact';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.scss'
})
export class CatComponent {
  public cat$: Observable<Fact> = new Observable();

  constructor(private catsService: CatsService){}

  ngOnInit() {
    this.cat$ = this.catsService.getRandomCat();
  }
}
