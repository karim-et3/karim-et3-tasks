import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SecondPage = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.goBackStyle}
        onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Text style={styles.mainTextStyle}>Second Page</Text>
      </View>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBackStyle: {
    margin: 10,
    padding: 3,
    textDecorationLine: 'underline',
  },
  mainTextStyle: {fontSize: 24, fontWeight: '600'},
});
