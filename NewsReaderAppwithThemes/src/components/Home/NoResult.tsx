import {View, Text} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../../hoc';
import themeStore from '../../mobx/Theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TNoResult, TNoResultExport} from '../../types';

const NoResult = ({FONTS, SIZES}: TNoResult) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: SIZES.small,
      }}>
      <FontAwesomeIcon size={40} color={themeStore.error} icon="circle-xmark" />
      <Text
        style={{
          color: themeStore.grey,
          fontSize: SIZES.large,
          fontWeight: FONTS.bold,
        }}>
        No Results.
      </Text>
    </View>
  );
};

export default WithThemeAndLiteObserver(
  NoResult,
) as React.ComponentType<TNoResultExport>;
