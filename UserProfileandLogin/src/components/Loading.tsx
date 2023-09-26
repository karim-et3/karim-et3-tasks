import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from '../hoc';
import {TCOLORS} from '../types';

const Loading = ({COLORS}: {COLORS: TCOLORS}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={36} animating={true} color={COLORS.primary} />
    </View>
  );
};

export default withObserverAndTheme(Loading);
