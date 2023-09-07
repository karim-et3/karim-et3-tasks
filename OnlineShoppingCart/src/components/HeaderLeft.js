import {StyleSheet, Pressable, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate('profile')} hitSlop={15}>
      <Feather name="user" style={{color: 'white', fontSize: 28}} />
    </Pressable>
  );
};

export default Header;

const styles = StyleSheet.create({});
