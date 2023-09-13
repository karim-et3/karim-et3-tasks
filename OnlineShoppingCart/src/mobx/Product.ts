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
const product = new Product();
export default product;
