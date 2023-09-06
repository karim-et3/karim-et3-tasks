import {makeAutoObservable} from 'mobx';

const addProductToCart = (items, newProduct) => [...items, newProduct];

class Cart {
  items = [];
  constructor() {
    makeAutoObservable(this);
  }

  addProductToCart(newProduct) {
    this.items = addProductToCart(this.items, newProduct);
  }
}
const cart = new Cart();
export default cart;
