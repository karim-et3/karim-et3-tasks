import {
  // action, computed, makeAutoObservable,
  observable,
  runInAction,
} from 'mobx';
import {TaddProd} from '../types';
import memoize from 'lodash/memoize';

class Cart {
  items = observable.array<TaddProd>([]);

  // constructor() {
  //   makeAutoObservable(this, {
  //     logCartItem: action,
  //     addProductToCart: action,
  //     deleteProduct: action,
  //     cartItems: computed,
  //     items: observable,
  //   });
  // }

  get cartItems() {
    return this.items;
  }

  logCartItem = () => runInAction(() => console.log('logItem:', this.items));

  addProductToCart(newProduct: TaddProd) {
    runInAction(() => {
      const itemIndex = this.items.findIndex(item => item.id === newProduct.id);
      if (itemIndex !== -1) {
        this.items[itemIndex].quantity += 1;
      } else {
        return this.items.push({...newProduct, quantity: 1});
      }
    });
  }

  deleteProduct(item: TaddProd) {
    runInAction(() => {
      const itemIndex = this.items.findIndex(it => it.id === item.id);
      if (itemIndex !== -1)
        if (this.items[itemIndex].quantity === 1) {
          this.items.splice(itemIndex, 1);
        } else {
          this.items[itemIndex].quantity -= 1;
        }
    });
  }
}

const createCartInstance = memoize(
  () => new Cart(),
  () => 1,
);

const cartStore = createCartInstance();
export default cartStore;
