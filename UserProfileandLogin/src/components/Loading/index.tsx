import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from '../../hoc';
import {TLoading, TLoadingExport} from '../../types';

const Loading = ({COLORS}: TLoading) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={36} animating={true} color={COLORS.primary} />
    </View>
  );
};

export default withObserverAndTheme(
  Loading,
) as React.ComponentType<TLoadingExport>;
