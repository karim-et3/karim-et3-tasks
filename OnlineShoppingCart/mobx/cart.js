import {makeAutoObservable} from 'mobx';

const addProductToCart = (items, newProduct) => {
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
  items = [];
  constructor() {
    makeAutoObservable(this);
  }

  addProductToCart(newProduct) {
    this.items = addProductToCart(this.items, newProduct);
  }
  deleteProduct(item) {
    if (item.quantity === 1)
      this.items = this.items.filter(it => (it.id !== item.id ? it : null));
    else {
      const itemIndex = this.items.findIndex(it => it.id === item.id);
      console.log('index', itemIndex);
      console.log('before', this.items[itemIndex]);
      this.items[itemIndex].quantity -= 1;
      console.log('after', this.items[itemIndex]);
    }
  }
}
const cart = new Cart();
export default cart;
