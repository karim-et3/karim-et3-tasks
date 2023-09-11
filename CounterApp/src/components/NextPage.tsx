import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Tnavigation} from '../types';

const NextPage = ({navigation}: Tnavigation) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('secondpage')}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}>
      <Text style={{textDecorationLine: 'underline', right: 10, top: 10}}>
        Next page
      </Text>
    </TouchableOpacity>
  );
};

export default NextPage;
