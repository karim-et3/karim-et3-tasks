import {View} from 'react-native';
import React from 'react';
import {withLiteObserver} from '../../hoc';
import themeStore from '../../mobx/Theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Search = withLiteObserver(() => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeStore.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon icon="ban" color={themeStore.error} size={120} />
    </View>
  );
});

export default Search;
