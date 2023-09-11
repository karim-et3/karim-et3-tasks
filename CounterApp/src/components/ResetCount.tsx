import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
type ResetCountProps = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};
const ResetCount = ({setCounter}: ResetCountProps) => {
  return (
    <TouchableOpacity
      style={styles.resetContainer}
      onPress={() => setCounter(0)}>
      <Text style={styles.resetText}>Reset?</Text>
    </TouchableOpacity>
  );
};

export default ResetCount;

const styles = StyleSheet.create({
  resetContainer: {
    top: 80,
  },
  resetText: {
    textDecorationLine: 'underline',
  },
});
