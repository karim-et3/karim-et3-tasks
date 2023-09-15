// import {computed, makeAutoObservable} from 'mobx';
import {products} from '../constants/products';
import memoize from 'lodash/memoize';

class Product {
  products = products;

  // constructor() {
  //   makeAutoObservable(this, {getData: computed});
  // }

  get getData() {
    return this.products;
  }
}

const createProductInstance = memoize(
  () => new Product(),
  () => 1,
);
const productStore = createProductInstance();
export default productStore;
