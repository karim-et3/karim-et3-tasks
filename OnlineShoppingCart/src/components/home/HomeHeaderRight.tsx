import {Pressable} from 'react-native';
import React from 'react';
import {Tnavigation} from '../../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLORS} from '../../constants';

const HomeHeaderRight = ({navigation}: Tnavigation) => {
  return (
    <Pressable onPress={() => navigation.navigate('cart')} hitSlop={15}>
      {/* <Feather name="shopping-bag" style={{color: 'white', fontSize: 28}} /> */}
      <FontAwesomeIcon icon="basket-shopping" size={28} color={COLORS.white} />
    </Pressable>
  );
};

export default HomeHeaderRight;
