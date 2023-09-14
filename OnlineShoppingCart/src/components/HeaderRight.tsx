import {Pressable} from 'react-native';
import React from 'react';
import {Tnavigation} from '../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {colors} from '../styles';

const HeaderRight = ({navigation}: Tnavigation) => {
  return (
    <Pressable onPress={() => navigation.navigate('cart')} hitSlop={15}>
      {/* <Feather name="shopping-bag" style={{color: 'white', fontSize: 28}} /> */}
      <FontAwesomeIcon
        icon="fa-brand fa-basket-shopping"
        size={28}
        color={colors.white}
      />
    </Pressable>
  );
};

export default HeaderRight;
