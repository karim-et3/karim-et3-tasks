import {useNavigation} from '@react-navigation/native';
import {computed, action, makeAutoObservable, observable} from 'mobx';

class Admin {
  user = {
    username: '',
    age: '',
    address: '',
    phone: '',
  };
  constructor() {
    makeAutoObservable(this, {
      user: observable,
      login: action,
      logOut: action,
      update: action,
      getUsername: computed,
      getPhone: computed,
      getAddress: computed,
      getAge: computed,
    });
  }
  login = userProp => {
    console.log(userProp);
    if (userProp.username === 'test' && userProp.password === '123') {
      this.user.username = userProp.username;
      console.log('in');
      return true;
    }
    return false;
  };
  logOut = () => {
    this.user.username = '';
    this.user.password = '';
    this.user.age = '';
    this.user.address = '';
    this.user.phone = '';
  };
  update = (username, age, address, phone) => {
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
  };
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

const adminStore = new Admin();
export default adminStore;
