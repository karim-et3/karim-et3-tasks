import React from 'react';
import {observer} from 'mobx-react-lite';
import TabButton from './TabButton';
import {TSearchTab} from '../../types';

const SearchTab = ({navigation, navigationStateIndex}: TSearchTab) => {
  return (
    <TabButton
      onPress={() => {
        navigation.navigate('search');
      }}
      index={1}
      navigationStateIndex={navigationStateIndex}
      title={'Search'}
    />
  );
};

export default observer(SearchTab);
