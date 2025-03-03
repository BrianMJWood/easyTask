import {
  Component,
  InputSignal,
  input,
  computed,
  Signal,
  output,
  OnInit,
} from '@angular/core';
import { User } from '../../assets/dummy-users';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user: InputSignal<User> = input.required<User>();
  chosenUser: InputSignal<User> = input.required<User>();
  imagePath: Signal<string> = computed(
    () => './assets/images/users/' + this.user().avatar
  );
  userSelected = output<User>();

  getIsSelected() {
    return this.chosenUser().id === this.user().id;
  }
}
