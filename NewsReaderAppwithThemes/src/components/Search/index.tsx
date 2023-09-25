import {View, Text} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import themeStore from '../../mobx/Theme';

const Search = () => {
  return (
    <View style={{flex: 1, backgroundColor: themeStore.colors.white}}>
      <Text style={{color: themeStore.colors.black}}>Search</Text>
    </View>
  );
};

export default observer(Search);
