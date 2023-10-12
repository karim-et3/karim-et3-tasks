import {View, StyleSheet} from 'react-native';
import React from 'react';

const Seperator = ({styles}) => {
  return (
    <View
      style={[
        styles,
        {
          alignSelf: 'center',
          width: '90%',
          borderTopWidth: StyleSheet.hairlineWidth,
        },
      ]}
    />
  );
};

export default Seperator;
