import {View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import {TsetCounter} from '../types';

const ButtonsWrap = ({setCounter}: TsetCounter) => {
  return (
    <View
      style={{marginTop: 40, display: 'flex', flexDirection: 'row', gap: 50}}>
      <CustomButton type={'increase'} setCounter={setCounter} />
      <CustomButton type={'decrease'} setCounter={setCounter} />
    </View>
  );
};

export default ButtonsWrap;
