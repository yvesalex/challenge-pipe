import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  @Input() user: UserModel | undefined;
  @Output() onHideUserDetail: EventEmitter<void> = new EventEmitter();

  hide() {
    this.onHideUserDetail.emit();
  }
}
