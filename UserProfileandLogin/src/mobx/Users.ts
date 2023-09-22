import {memoize} from 'lodash';
import {users} from '../constants/users';
import {TUsers} from '../types';
import {runInAction} from 'mobx';

class Users {
  users: Array<TUsers> = users;

  get getUsers() {
    return this.users;
  }
  set setUsers(users: TUsers[]) {
    this.users = users;
  }
  getUser(id: number) {
    return users.find(user => user.id === id);
  }
  deleteUser(id: number) {
    return runInAction(() => {
      return (this.users = this.users.filter(user => user.id !== id));
    });
  }
}
const createUserInstance = memoize(
  () => new Users(),
  () => 1,
);
const usersStore = createUserInstance();
export default usersStore;
