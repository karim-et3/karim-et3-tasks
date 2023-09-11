import {makeAutoObservable} from 'mobx';
const watch = require('../../assets/watch.png');
const handbag = require('../../assets/handbag-transparent.png');
const shirt = require('../../assets/shirt-transparent.png');
const wallet = require('../../assets/wallet.webp');
const smartwatch = require('../../assets/smart-watch.webp');
const mouse = require('../../assets/mouse.webp');
const backpack = require('../../assets/backpack.jpeg');

class Product {
  products = [
    {
      id: 1,
      title: 'Backpack',
      description: 'nice bag',
      image: backpack,
      price: 30,
      quantity: 0,
    },
    {
      id: 2,
      title: 'watch',
      description: 'nice burger',
      image: watch,
      price: 30,
      quantity: 0,
    },
    {
      id: 3,
      title: 'Hand-Bag',
      description: 'nice carrot',
      image: handbag,
      price: 30,
      quantity: 0,
    },
    {
      id: 4,
      title: 'Carrots 100 g 1000g fesdsfdfsfsdf',
      description: 'nice carrot',
      image: shirt,
      price: 30,
      quantity: 0,
    },
    {
      id: 5,
      title: 'Mouse',
      description: 'nice carrot',
      image: mouse,
      price: 30,
      quantity: 0,
    },
    {
      id: 6,
      title: 'Smart Watch',
      description: 'nice carrot',
      image: smartwatch,
      price: 30,
      quantity: 0,
    },
    {
      id: 7,
      title: 'Leather Wallet',
      description: 'nice carrot',
      image: wallet,
      price: 30,
      quantity: 0,
    },
  ];
}
const product = new Product();
export default product;
