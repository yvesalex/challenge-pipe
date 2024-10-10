import { Component, EventEmitter, Input, OnChanges, Output, signal, Signal, SimpleChanges, WritableSignal } from '@angular/core';
import { ArticleModel } from '../../models/article.model';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  @Input() article!: ArticleModel | undefined;
  @Input() preview!: boolean;
  @Output() onEdit: EventEmitter<ArticleModel | undefined> = new EventEmitter<ArticleModel | undefined>();
  isVisible: WritableSignal<boolean> = signal(false);
  
  ngOnInit() {
    this.isVisible.set(this.preview);
  }

  toggleImage() {
    this.isVisible.update(isVisible => !isVisible);
  }

  edit(event: any) {
    this.onEdit.next(this.article);
  }
}
