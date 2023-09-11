import {action, computed, makeAutoObservable, observable} from 'mobx';

class UserStore {
  user = {
    name: '',
    address: '',
  };

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      addUser: action,
      getUser: computed,
    });
  }

  addUser(name, address) {
    this.user.name = name;
    this.user.address = address;
  }

  get getUser() {
    return this.user;
  }
}
const userStore = new UserStore();

export default userStore;
