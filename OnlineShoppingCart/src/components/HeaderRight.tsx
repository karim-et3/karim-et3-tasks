import {Pressable} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Tnavigation} from '../types';

const HeaderRight = ({navigation}: Tnavigation) => {
  return (
    <Pressable onPress={() => navigation.navigate('cart')} hitSlop={15}>
      <Feather name="shopping-bag" style={{color: 'white', fontSize: 28}} />
    </Pressable>
  );
};

export default HeaderRight;
