import React from 'react';
import {observer} from 'mobx-react-lite';
import TabButton from './TabButton';
import {THomeTab} from '../../types';

const HomeTab = ({navigation, navigationStateIndex}: THomeTab) => {
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
};

export default observer(HomeTab);
