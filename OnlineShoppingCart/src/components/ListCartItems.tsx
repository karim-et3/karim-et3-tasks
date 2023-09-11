import React from 'react';
import cart from '../mobx/Cart';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import {observer} from 'mobx-react';

const ListCartItems = () => {
  return (
    <>
      {cart.items.length !== 0 ? (
        cart.items.map((item, index) => (
          <CartItem product={item} index={index} />
        ))
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default observer(ListCartItems);
