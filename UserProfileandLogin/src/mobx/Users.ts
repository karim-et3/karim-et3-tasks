import {memoize} from 'lodash';
import {users} from '../constants/users';
import {observable, runInAction} from 'mobx';
import {TUsers} from '../types';
import userStore from './User';

class Users {
  users = observable.array<TUsers>(users);

  get getUsers() {
    return this.users;
  }

  getUser(id: number) {
    runInAction(() => {
      return userStore.setUser(this.users.find(user => user.id === id));
    });
  }
  deleteUser(id: number) {
    runInAction(() => {
      const index = this.users.findIndex(item => item.id === id);
      this.users.remove(this.users[index]);
    });
  }
}
const createUserInstance = memoize(
  () => new Users(),
  () => 1,
);
const usersStore = createUserInstance();
export default usersStore;
