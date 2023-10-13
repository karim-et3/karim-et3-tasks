import {View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {withLiteObserver} from '../../../hoc';
import {TTabButtonSwitch} from '../../../types';
import themeStore from '../../../mobx/Theme';
import TabButtonTitle from './TabButtonTitle';

const TabButtonSwitch = withLiteObserver(
  ({navigationStateIndex}: TTabButtonSwitch) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
        }}>
        <FontAwesomeIcon
          icon={themeStore.isLight ? 'sun' : 'moon'}
          color={themeStore.primary}
        />
        <TabButtonTitle
          title={themeStore.isLight ? 'Light' : 'Dark'}
          navigationStateIndex={navigationStateIndex}
        />
      </View>
    );
  },
);

export default TabButtonSwitch;
