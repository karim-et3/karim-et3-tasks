import {computed, action, makeAutoObservable, observable} from 'mobx';

class User {
  user = {
    username: '',
    password: '',
    age: '',
    address: '',
    phone: '',
  };
  constructor() {
    makeAutoObservable(this, {
      user: observable,
      login: action,
      logOut: action,
      getUser: computed,
    });
  }
  login = userProp => {
    console.log(userProp);
    if (userProp.username === 'test' && userProp.password === '123') {
      this.user.username = userProp.username;
      this.user.password = userProp.password;
      console.log('in');
    }
  };
  logOut = () => {
    this.user.username = '';
    this.user.password = '';
    this.user.age = '';
    this.user.address = '';
    this.user.phone = '';
  };
  get getUser() {
    return this.user;
  }
}
const userStore = new User();
export default userStore;
