import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TsetCounter} from '../types';

const ResetCount = ({setCounter}: TsetCounter) => {
  return (
    <TouchableOpacity style={{top: 80}} onPress={() => setCounter(0)}>
      <Text>Reset?</Text>
    </TouchableOpacity>
  );
};

export default ResetCount;
