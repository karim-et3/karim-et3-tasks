import {action, computed, makeAutoObservable, observable} from 'mobx';
import {TaddProd} from '../types';

const addProductToCart = (items: Array<TaddProd>, newProduct: TaddProd) => {
  const itemIndex = items.findIndex(item => item.id === newProduct.id);

  if (itemIndex !== -1) {
    const updatedItems = [...items];
    updatedItems[itemIndex].quantity += 1;
    return updatedItems;
  } else {
    return [...items, {...newProduct, quantity: newProduct.quantity + 1}];
  }
};

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
  logCartItem = () => console.log(cart);

  addProductToCart(newProduct: TaddProd) {
    this.items = addProductToCart(this.items, newProduct);
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
const cart = new Cart();
export default cart;
