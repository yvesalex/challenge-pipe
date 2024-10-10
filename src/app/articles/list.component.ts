import { Component, computed, EventEmitter, inject, Output, signal, Signal, WritableSignal } from '@angular/core';
import { ArticleModel } from '../models/article.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleService } from '../services/articles.service';
import { DetailComponent } from './detail/detail.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [DetailComponent, AsyncPipe, CommonModule, FormsModule, RouterModule, NgbModule, EditComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  title: string = 'Template Component - Articles List';
  showDetail: boolean = false;
  articleService: ArticleService = inject(ArticleService);
  editingArticle: WritableSignal<ArticleModel | undefined> = signal(undefined);
  modalService: NgbModal = inject(NgbModal);
  articles$: Signal<ArticleModel[]> = toSignal(this.articleService.getAll(), {
    initialValue: []
  });

  view(user: ArticleModel) {
    this.showDetail = false;
    if (user) {
      this.showDetail = true;
    }
    else {
      this.showDetail = false;
    }
  }

  edit(article: ArticleModel) {
    this.showDetail = false;
    if (article) {
      this.showDetail = true;
    }
    else {
      this.showDetail = false;
    }
  }

  save(article: any) {
    if (article) {
      this.editingArticle.set(article);
      this.articleService.update(article);
    }
  }

  openModalFunction(content: any) {
    this.editingArticle.set(content);;
  }
}
