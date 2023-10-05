import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {WithThemeAndLiteObserver} from '../hoc';

const FetchError = ({COLORS}) => {
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
          backgroundColor: COLORS.primary,
          alignSelf: 'center',
        }}>
        <FontAwesomeIcon size={30} color={COLORS.white} icon="exclamation" />
      </View>
      <Text style={{color: COLORS.black}}>Error occured.</Text>
    </View>
  );
};

export default WithThemeAndLiteObserver(FetchError);
