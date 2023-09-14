import {Pressable} from 'react-native';
import React from 'react';
import {Tnavigation} from '../../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLORS} from '../../constants';

const HomeHeaderLeft = ({navigation}: Tnavigation) => {
  return (
    <Pressable onPress={() => navigation.navigate('profile')} hitSlop={15}>
      <FontAwesomeIcon
        icon="fa-regular fa-circle-user"
        size={28}
        color={COLORS.white}
      />
    </Pressable>
  );
};

export default HomeHeaderLeft;
