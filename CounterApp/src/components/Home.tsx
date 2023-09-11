import {View, Text} from 'react-native';
import React, {useState} from 'react';
import ResetCount from './ResetCount';
import {colors} from '../styles/styles';
import ButtonsWrap from './ButtonsWrap';
import {Tnavigation} from '../types';
import NextPage from './NextPage';

const Home = ({navigation}: Tnavigation) => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{flex: 1}}>
      <NextPage navigation={navigation} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              backgroundColor: colors.primary,
              paddingHorizontal: 42,
              paddingVertical: 12,
              fontSize: 20,
              fontWeight: '700',
              color: 'white',
              borderRadius: 5,
            }}>
            {counter}
          </Text>
          <ButtonsWrap setCounter={setCounter} />
          <ResetCount setCounter={setCounter} />
        </View>
      </View>
    </View>
  );
};

export default Home;
