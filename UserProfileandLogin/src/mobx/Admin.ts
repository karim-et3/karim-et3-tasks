import {
  // computed, action, makeAutoObservable,
  observable,
  runInAction,
} from 'mobx';
import memoize from 'lodash/memoize';
import {TAdmin, TLogin} from '../types';

class Admin {
  user = observable({
    username: '',
    age: '',
    address: '',
    phone: '',
  });

  // constructor() {
  //   makeAutoObservable(this, {
  //     user: observable,
  //     login: action,
  //     logOut: action,
  //     update: action,
  //     getUsername: computed,
  //     getPhone: computed,
  //     getAddress: computed,
  //     getAge: computed,
  //   });
  // }

  login = ({username, password}: TLogin) => {
    return runInAction(() => {
      if (username === 'test' && password === '123') {
        this.user.username = username;
        console.log('in');
        return true;
      }
      return false;
    });
  };

  logOut = () => {
    runInAction(() => {
      this.user.username = '';
      this.user.age = '';
      this.user.address = '';
      this.user.phone = '';
    });
  };

  update = ({username, age, address, phone}: TAdmin) => {
    runInAction(() => {
      try {
        this.user.username = username;
        this.user.age = age;
        this.user.address = address;
        this.user.phone = phone;
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    });
  };

  get getAdmin() {
    return {
      username: this.user.username,
      age: this.user.age,
      address: this.user.address,
      phone: this.user.phone,
    };
  }
  get getUsername() {
    return this.user.username;
  }
  get getPhone() {
    return this.user.phone;
  }
  get getAge() {
    return this.user.age;
  }
  get getAddress() {
    return this.user.address;
  }
}

const createAdminInstance = memoize(
  () => new Admin(),
  () => 1,
);
const adminStore = createAdminInstance();
export default adminStore;
