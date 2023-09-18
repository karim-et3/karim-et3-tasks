import {products} from '../constants/products';
import memoize from 'lodash/memoize';

class Product {
  products = products;

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
