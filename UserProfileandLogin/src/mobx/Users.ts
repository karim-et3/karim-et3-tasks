import {memoize} from 'lodash';
import {users} from '../constants/users';
import {TUsers} from '../types';

class Users {
  users: Array<TUsers> = users;

  get getUsers() {
    return this.users;
  }
  getUser(id: number) {
    return users.find(user => user.id === id);
  }
}
const createUserInstance = memoize(
  () => new Users(),
  () => 1,
);
const usersStore = createUserInstance();
export default usersStore;
