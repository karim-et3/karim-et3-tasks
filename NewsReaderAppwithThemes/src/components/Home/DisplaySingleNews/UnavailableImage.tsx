import {View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import themeStore from '../../../mobx/Theme';
import {WithThemeAndLiteObserver} from '../../../hoc';

const UnavailableImage = () => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon icon="image" color={themeStore.error} size={33} />
    </View>
  );
};

export default WithThemeAndLiteObserver(UnavailableImage);
