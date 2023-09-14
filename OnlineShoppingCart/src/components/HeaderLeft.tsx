import {Pressable} from 'react-native';
import React from 'react';
import {Tnavigation} from '../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {colors} from '../styles';

const Header = ({navigation}: Tnavigation) => {
  return (
    <Pressable onPress={() => navigation.navigate('profile')} hitSlop={15}>
      <FontAwesomeIcon
        icon="fa-regular fa-circle-user"
        size={28}
        color={colors.white}
      />
    </Pressable>
  );
};

export default Header;
