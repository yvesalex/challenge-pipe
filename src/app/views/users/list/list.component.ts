import { Component, computed, EventEmitter, inject, signal, Signal, WritableSignal } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { Observable, Subject } from 'rxjs';
import { UserService } from '../../../services/users.service';
import { UserComponent } from '../../../shared/user/user.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserDetailComponent } from '../../../shared/user/user-detail/user-detail.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [UserComponent, UserDetailComponent, AsyncPipe, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  title: string = 'Users';
  filterText: string = '';
  btnText = 'Show';
  orderBy: 'asc' | 'desc' = 'asc';
  sortBy: 'email' | 'lastname' = 'email';
  showDetail: boolean = false;
  
  userService: UserService = inject(UserService);
  users$: Signal<UserModel[]> = toSignal(this.userService.getAllUsers(), {
    initialValue: []
  });
  selectedUserID: number = -1;
  selectedUser!: UserModel;
  // selectedUser$: EventEmitter<UserModel> = new EventEmitter<UserModel>();
  sortOrder: WritableSignal<string> = signal('asc');
  sortOrderAttribute: WritableSignal<string> = signal('email');
  filterValue: WritableSignal<string> = signal('');
  
  constructor() {
    // this.selectedUser$.emit();
  }
  
  showUserDetail(user: UserModel) {
    this.showDetail = false;
    if (user) {
      this.selectedUserID = user.id;
      this.showDetail = true;
    }
    else {
      this.showDetail = false;
    }
    console.log(user, this.showDetail)
    // this.selectedUser$.emit(user);
  }

  hideUserDetail() {
    this.showDetail = false;
    this.selectedUserID = -1;
  }
  
  toggleDetail(user: UserModel, button: any) {
    this.showDetail = button.innerText == 'Hide' ? false : true;
    this.selectedUserID =  this.showDetail ? user.id : -1;
    this.selectedUser =  user;
  }

  visibleUsers: Signal<UserModel[]> = computed(() => {
    return this.users$().filter(user => user.email.includes(this.filterValue())).sort((a:UserModel, b:UserModel)=>{
        return this.sortOrder() === 'asc' 
        ? this.compare(a, b, this.sortOrderAttribute()) 
        : this.compare(b, a, this.sortOrderAttribute());
      });
  });

  compare(a: UserModel, b: UserModel, sortAttribute: string) {
    if (sortAttribute == 'email') {
      return a.email.localeCompare(b.email);
    }
    else {
      return a.name.lastname.localeCompare(b.name.lastname);
    }
  }

  sort(order: 'asc' | 'desc'){
    this.sortOrder.set(order);
  }

  sortAttribute(order: 'email' | 'lastname'){
    this.sortOrderAttribute.set(order);
  }

  filter()
  {
    this.filterValue.set(this.filterText);
  }
}
