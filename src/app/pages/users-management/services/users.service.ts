import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { DUMMY_USERS } from '../../../core/data/users';
import { ENV } from '../../../../envs/env.prod';
import { APIs } from '../../../core/enums/APIs.enum';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  private usersData = signal<User[]>([]);
  public users = this.usersData.asReadonly();

  /**
   * Fetches all users from the API and updates the local state
   * @returns Observable of User array
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${ENV.BASE_URL}${APIs.USERS}`).pipe(
      map((users) => {
        this.usersData.set(users);
        return users;
      })
    );
  }

  /**
   * Creates a new user by sending a POST request to the API
   * @param user - The user object to create
   * @returns Observable of the created User
   */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${ENV.BASE_URL}${APIs.USERS}`, user).pipe(
      map((createdUser) => {
        this.usersData.update((users) => [...users, createdUser]);
        return createdUser;
      })
    );
  }
}
