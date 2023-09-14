import {computed, makeAutoObservable} from 'mobx';
import {products} from '../constants';

class Product {
  products = products;
  constructor() {
    makeAutoObservable(this, {getData: computed});
  }
  get getData() {
    return this.products;
  }
}
const productStore = new Product();
export default productStore;
