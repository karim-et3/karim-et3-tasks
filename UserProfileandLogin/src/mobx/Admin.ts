import {observable, runInAction} from 'mobx';
import memoize from 'lodash/memoize';

class Admin {
  user = observable.object({
    username: '',
    age: '',
    address: '',
    phone: '',
    loggedIn: false,
  });
  tempUser = observable.object({
    username: this.user.username,
    age: this.user.age,
    address: this.user.address,
    phone: this.user.phone,
    password: '',
  });

  login = () => {
    return runInAction(() => {
      if (this.tempUsername === 'test' && this.tempPassword === '123') {
        this.setUsername(this.tempUsername);
        this.setLoggedIn(true);
        console.log('in');
        return true;
      }
      return false;
    });
  };

  logOut = () => {
    runInAction(() => {
      this.clear();
      this.setLoggedIn(false);
    });
  };

  update = () => {
    runInAction(() => {
      try {
        this.setUsername(this.tempUsername);
        this.setAge(this.tempAge);
        this.setAddress(this.tempAddress);
        this.setPhone(this.tempPhone);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    });
  };

  clear() {
    runInAction(() => {
      this.setUsername('');
      this.setAge('');
      this.setAddress('');
      this.setPhone('');
    });
  }

  resetInput() {
    runInAction(() => {
      this.setTempUsername(this.username);
      this.setTempAge(this.age);
      this.setTempAddress(this.address);
      this.setTempPhone(this.phone);
    });
  }
  setTempUsername(username: string) {
    runInAction(() => {
      this.tempUser.username = username;
    });
  }
  setTempPhone(phone: string) {
    runInAction(() => {
      this.tempUser.phone = phone;
    });
  }
  setTempAge(age: string) {
    runInAction(() => {
      this.tempUser.age = age;
    });
  }
  setTempAddress(address: string) {
    runInAction(() => {
      this.tempUser.address = address;
    });
  }

  setUsername(username: string) {
    runInAction(() => {
      this.user.username = username;
    });
  }
  setPhone(phone: string) {
    runInAction(() => {
      this.user.phone = phone;
    });
  }
  setAge(age: string) {
    runInAction(() => {
      this.user.age = age;
    });
  }
  setAddress(address: string) {
    runInAction(() => {
      this.user.address = address;
    });
  }
  setLoggedIn(loggedIn: boolean) {
    runInAction(() => {
      this.user.loggedIn = loggedIn;
    });
  }
  setTempPassword(password: string) {
    runInAction(() => {
      this.tempUser.password = password;
    });
  }

  get checkAuth() {
    return this.user.loggedIn;
  }
  get admin() {
    return {
      username: this.user.username,
      age: this.user.age,
      address: this.user.address,
      phone: this.user.phone,
    };
  }
  get username() {
    return this.user.username;
  }
  get phone() {
    return this.user.phone;
  }
  get age() {
    return this.user.age;
  }
  get address() {
    return this.user.address;
  }

  get tempUsername() {
    return this.tempUser.username;
  }
  get tempPhone() {
    return this.tempUser.phone;
  }
  get tempAge() {
    return this.tempUser.age;
  }
  get tempAddress() {
    return this.tempUser.address;
  }
  get tempPassword() {
    return this.tempUser.password;
  }
}

const createAdminInstance = memoize(
  () => new Admin(),
  () => 1,
);
const adminStore = createAdminInstance();
export default adminStore;
