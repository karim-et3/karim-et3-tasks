import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ResetCount = ({setCounter}) => {
  return (
    <TouchableOpacity
      style={{position: 'absolute', bottom: 0}}
      onPress={() => setCounter(0)}>
      <Text>Reset?</Text>
    </TouchableOpacity>
  );
};

export default ResetCount;

const styles = StyleSheet.create({});
