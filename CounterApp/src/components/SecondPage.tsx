import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Tnavigation} from '../types';

const SecondPage = ({navigation}: Tnavigation) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{margin: 10, padding: 3}}
        onPress={() => navigation.goBack()}>
        <Text style={{textDecorationLine: 'underline'}}>Go back</Text>
      </TouchableOpacity>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: '600'}}>Second Page</Text>
      </View>
    </View>
  );
};

export default SecondPage;
