import { Component, EventEmitter, inject, Input, NgModule, Output, signal, Signal, WritableSignal } from '@angular/core';
import { ArticleModel } from '../../models/article.model';
import { FormsModule, NgModel } from '@angular/forms';
import { DetailComponent } from '../detail/detail.component';
import { ArticleService } from '../../services/articles.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, DetailComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  @Input() article: WritableSignal<ArticleModel | undefined> = signal(undefined);
  @Output() onSave: EventEmitter<ArticleModel | undefined> = new EventEmitter<ArticleModel | undefined>();
  newArticle: ArticleModel = {
    id: this.article()?.id,
    imageUrl: this.article()?.imageUrl,
    createdAt: this.article()?.createdAt,
    title: this.article()?.title,
    content: this.article()?.content,
    comments: this.article()?.comments
  }

  setImageUrl(url: string) {
    this.newArticle = this.article()!;
    this.newArticle.imageUrl = url;
    this.article.set(this.newArticle);
  }

  setTitle(title: string) {
    this.newArticle.title = title;
    this.article.set(this.newArticle);
  }

  setContent(content: string) {
    this.newArticle.content = content;
    this.article.set(this.newArticle);
  }

  save() {
    this.onSave.emit(this.article()!);
  }
}
