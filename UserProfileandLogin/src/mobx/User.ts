import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TUsers} from '../types';

class User {
  user = observable.object({
    id: 0,
    firstName: '',
    lastName: '',
    image: 0,
    dob: new Date(),
    online: false,
    description: '',
  });

  setUser(user: TUsers) {
    runInAction(() => {
      Object.assign(this.user, user);
      return this.user;
    });
  }

  get userDetails() {
    return this.user;
  }
  get id() {
    return this.user.id;
  }
  get firstName() {
    return this.user.firstName;
  }
  get lastName() {
    return this.user.lastName;
  }
  get image() {
    return this.user.image;
  }
  get dob() {
    return this.user.dob;
  }
  get online() {
    return this.user.online;
  }
  get description() {
    return this.user.description;
  }
}
const createUserInstance = memoize(
  () => new User(),
  () => 1,
);
const userStore = createUserInstance();
export default userStore;
