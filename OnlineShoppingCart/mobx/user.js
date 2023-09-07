import {action, makeAutoObservable, observable} from 'mobx';

class User {
  user = {
    name: '',
    address: '',
  };
  addUser(name, address) {
    this.user.name = name;
    this.user.address = address;
  }
  constructor() {
    makeAutoObservable(this);
  }
}
const user = new User();
export default user;
