import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../styles/styles';
import {TButtonProps} from '../types';

const CustomButton = ({type, setCounter}: TButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() =>
        type === 'increase'
          ? setCounter(oldCount => oldCount + 1)
          : setCounter(oldCount => oldCount - 1)
      }
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 75,
        backgroundColor: colors.secondary,
      }}>
      <Text style={{fontWeight: '500'}}>{type === 'increase' ? '+' : '-'}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
