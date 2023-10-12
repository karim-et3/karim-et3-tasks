import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../hoc/theme';
import {TLoading} from '../types';

const Loading = ({COLORS}: TLoading) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={44} color={COLORS.primary} />
    </View>
  );
};

export default WithThemeAndLiteObserver(Loading);
