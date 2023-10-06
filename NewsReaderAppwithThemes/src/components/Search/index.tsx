import {View, Text} from 'react-native';
import React from 'react';
import {withLiteObserver} from '../hoc';
import themeStore from '../../mobx/Theme';

const Search = () => {
  return (
    <View style={{flex: 1, backgroundColor: themeStore.white}}>
      <Text style={{color: themeStore.black}}>Search</Text>
    </View>
  );
};

export default withLiteObserver(Search);
