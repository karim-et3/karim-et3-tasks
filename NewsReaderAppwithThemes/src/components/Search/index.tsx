import {View, Text} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../hoc';

const Search = ({COLORS}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Text style={{color: COLORS.black}}>Search</Text>
    </View>
  );
};

export default WithThemeAndLiteObserver(Search);
