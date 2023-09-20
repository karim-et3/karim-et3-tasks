import {observable, runInAction} from 'mobx';
import {TProduct} from '../types';
import memoize from 'lodash/memoize';

class Cart {
  items = observable.array<TProduct>([]);

  get cartItems() {
    return this.items;
  }

  logCartItem = () => runInAction(() => console.log('logItems:', this.items));

  addProductToCart(newProduct: TProduct) {
    runInAction(() => {
      const itemIndex = this.items.findIndex(item => item.id === newProduct.id);
      if (itemIndex !== -1) {
        this.items[itemIndex].quantity += 1;
      } else {
        return this.items.push({...newProduct, quantity: 1});
      }
    });
  }

  deleteProduct(item: TProduct) {
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
