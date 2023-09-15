import memoize from 'lodash/memoize';
import {
  // action, computed, makeAutoObservable,
  observable,
  runInAction,
} from 'mobx';

class User {
  user = observable({
    name: '',
    address: '',
  });

  // get userName(): string {
  //   return this.user.name;
  // }
  // get userAddress(): string {
  //   return this.user.address;
  // }

  // set userName(value: string) {
  //   this.user.name = value;
  // }
  // set userAddress(value: string) {
  //   this.user.name = value;
  // }

  // constructor() {
  //   makeAutoObservable(this, {
  //     user: observable,
  //     addUser: action,
  //     getUser: computed,
  //   });
  // }

  addUser({name, address}: {name: string; address: string}) {
    runInAction(() => {
      this.user.name = name;
      this.user.address = address;
    });
  }

  get getUser() {
    return {
      name: this.user.name,
      address: this.user.address,
    };
  }
}

const createUserInstance = memoize(
  () => new User(),
  () => 1,
);
const userStore = createUserInstance();

export default userStore;
