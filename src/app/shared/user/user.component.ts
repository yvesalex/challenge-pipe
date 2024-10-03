import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/users.service';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user: UserModel | undefined;
  @Input() selectedUser: any;
  showDetail: boolean = false;
  btnText = 'Show';
  @Output() onShowUserDetail: EventEmitter<UserModel> = new EventEmitter();
  userService: UserService = inject(UserService);

  toggleDetail() {
    this.showDetail = !this.showDetail;
    this.btnText = this.showDetail ? 'Hide' : 'Show';
    this.onShowUserDetail.emit(this.showDetail ? this.user : undefined);
  }

  ngOnInit() {
    console.log(this.selectedUser)
  }
}
