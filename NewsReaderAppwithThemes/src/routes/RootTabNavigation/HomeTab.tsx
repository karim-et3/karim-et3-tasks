import React from 'react';
import TabButton from './TabButton';
import {THomeTab} from '../../types';
import {withLiteObserver} from '../../hoc';

const HomeTab = withLiteObserver(
  ({navigation, navigationStateIndex}: THomeTab) => {
    return (
      <TabButton
        onPress={() => {
          navigation.navigate('home');
        }}
        index={0}
        navigationStateIndex={navigationStateIndex}
        title={'Home'}
      />
    );
  },
);

export default HomeTab;
