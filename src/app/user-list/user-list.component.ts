import {
  Component,
  output,
  InputSignal,
  input,
  OnInit,
  OutputEmitterRef,
} from '@angular/core';
import { User, users } from '../../assets/dummy-users';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: User[] = users;
  userSelected = output<User>();
  chosenUser: User = {
    id: '',
    name: '',
    avatar: '',
  };
  user: InputSignal<User> = input.required<User>();

  handleUserSelected(user: User) {
    this.userSelected.emit(user);
    this.chosenUser = user;
  }
}
