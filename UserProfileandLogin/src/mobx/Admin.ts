import {observable, runInAction} from 'mobx';
import memoize from 'lodash/memoize';
import {TUpdateAdmin, TLoginInput} from '../types';

class Admin {
  user = observable({
    username: '',
    age: '',
    address: '',
    phone: '',
    loggedIn: false,
  });

  checkAuth = () => {
    return this.user.loggedIn;
  };
  login = ({username, password}: TLoginInput) => {
    return runInAction(() => {
      if (username === 'test' && password === '123') {
        this.user.username = username;
        this.user.loggedIn = true;
        console.log('in');
        return true;
      }
      return false;
    });
  };

  logOut = () => {
    return runInAction(() => {
      this.user.username = '';
      this.user.age = '';
      this.user.address = '';
      this.user.phone = '';
      this.user.loggedIn = false;
    });
  };

  update = ({username, age, address, phone}: TUpdateAdmin) => {
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
