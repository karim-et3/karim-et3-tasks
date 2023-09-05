import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({type, setCounter}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        type === 'increase'
          ? setCounter(oldCount => oldCount + 1)
          : setCounter(oldCount => oldCount - 1)
      }
      style={styles.modifiersStyle}>
      <Text>{type === 'increase' ? '+' : '-'}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  modifiersStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 50,
    width: 50,
    borderRadius: 75,
    backgroundColor: '#d1d5db',
  },
});
