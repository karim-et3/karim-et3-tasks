import React from 'react';
import TabButton from './TabButton';
import {TSearchTab} from '../../types';
import {withLiteObserver} from '../../hoc';

const SearchTab = withLiteObserver(
  ({navigation, navigationStateIndex}: TSearchTab) => {
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
  },
);

export default SearchTab;
