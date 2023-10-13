import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {withLiteObserver} from '../../hoc';
import themeStore from '../../mobx/Theme';

const FetchError = withLiteObserver(() => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}>
      <View
        style={{
          padding: 8,
          borderRadius: 200,
          backgroundColor: themeStore.primary,
          alignSelf: 'center',
        }}>
        <FontAwesomeIcon
          size={30}
          color={themeStore.white}
          icon="exclamation"
        />
      </View>
      <Text style={{color: themeStore.black}}>Error occured.</Text>
    </View>
  );
});

export default FetchError;
