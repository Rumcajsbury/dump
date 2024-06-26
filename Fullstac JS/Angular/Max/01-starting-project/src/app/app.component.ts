import { Component, signal } from '@angular/core';
import { headerComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [headerComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = signal<User[]>(DUMMY_USERS);
  selectedUser = signal<User | undefined>(undefined);

  onSelectUser(id: string) {
    const user = DUMMY_USERS.find((dummyUser) => dummyUser.id === id);

    if (user) this.selectedUser.set(user);
  }
}
