import {StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const HeaderRight = ({navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate('cart')} hitSlop={15}>
      <Feather name="shopping-bag" style={{color: 'white', fontSize: 28}} />
    </Pressable>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({});
