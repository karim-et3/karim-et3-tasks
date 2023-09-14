import {action, computed, makeAutoObservable, observable} from 'mobx';
import {TaddProd} from '../src/types';
// import lodash from 'lodash';
const {memoize} = require('lodash');

class Cart {
  items: Array<TaddProd> = [];
  constructor() {
    makeAutoObservable(this, {
      logCartItem: action,
      addProductToCart: action,
      deleteProduct: action,
      getItems: computed,
      items: observable,
    });
  }

  get getItems() {
    return this.items;
  }
  logCartItem = () => console.log(this.items);

  addProductToCart(newProduct: TaddProd) {
    const itemIndex = this.items.findIndex(item => item.id === newProduct.id);
    if (itemIndex !== -1) {
      const updatedItems = [...this.items];
      updatedItems[itemIndex].quantity += 1;
      return (this.items = updatedItems);
    } else {
      return (this.items = [
        ...this.items,
        {...newProduct, quantity: newProduct.quantity + 1},
      ]);
    }
  }

  deleteProduct(item: TaddProd) {
    if (item.quantity === 1)
      this.items = this.items.filter(it => (it.id !== item.id ? it : null));
    else {
      const itemIndex = this.items.findIndex(it => it.id === item.id);
      this.items[itemIndex].quantity -= 1;
    }
  }
}
const cartStore = new Cart();
// const cartStore = lodash.memoize(() => test);
export default cartStore;
