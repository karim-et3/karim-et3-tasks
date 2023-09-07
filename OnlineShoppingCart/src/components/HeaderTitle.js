import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderTitle = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 24,
          color: 'white',
          fontWeight: 'bold',
          position: 'absolute',
          left: '33%',
        }}>
        Home
      </Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({});
