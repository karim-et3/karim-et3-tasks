import {View, Text} from 'react-native';
import React from 'react';
import themeStore from '../../mobx/Theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const FetchError = () => {
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
          backgroundColor: themeStore.colors.primary,
          alignSelf: 'center',
        }}>
        <FontAwesomeIcon
          size={30}
          color={themeStore.colors.white}
          icon="exclamation"
        />
      </View>
      <Text style={{color: themeStore.colors.black}}>Error occured.</Text>
    </View>
  );
};

export default FetchError;
