import memoize from 'lodash/memoize';
import {observable, runInAction} from 'mobx';

class User {
  user = observable({
    name: '',
    address: '',
  });

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
