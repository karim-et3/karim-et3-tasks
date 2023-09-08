import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
type ResetCountProps = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};
const ResetCount = ({setCounter}: ResetCountProps) => {
  return (
    <TouchableOpacity style={{top: 80}} onPress={() => setCounter(0)}>
      <Text>Reset?</Text>
    </TouchableOpacity>
  );
};

export default ResetCount;

const styles = StyleSheet.create({});
