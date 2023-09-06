import {makeAutoObservable} from 'mobx';
const watch = require('../assets/watch.png');
const bag = require('../assets/bag.jpg');
const shirt = require('../assets/shirt.webp');

class Product {
  products = [
    {id: 1, title: 'Bag', description: 'nice bag', image: bag, price: 30},
    {
      id: 2,
      title: 'watch',
      description: 'nice burger',
      image: watch,
      price: 30,
    },
    {
      id: 3,
      title: 'Carrots',
      description: 'nice carrot',
      image: shirt,
      price: 30,
    },
    {
      id: 4,
      title: 'Carrots 100 g 1000g fesdsfdfsfsdf',
      description: 'nice carrot',
      image: shirt,
      price: 30,
    },
    {
      id: 5,
      title: 'Carrots',
      description: 'nice carrot',
      image: shirt,
      price: 30,
    },
    {
      id: 6,
      title: 'Carrots',
      description: 'nice carrot',
      image: shirt,
      price: 30,
    },
  ];

  constructore() {
    makeAutoObservable(true);
  }
}
const product = new Product();
export default product;
