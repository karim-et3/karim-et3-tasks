import {TouchableHighlight, View} from 'react-native';
import React from 'react';
import {TTabButton} from '../../../types';
import TabButtonTitle from './TabButtonTitle';
import {withLiteObserver} from '../../../hoc';
import themeStore from '../../../mobx/Theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const TabButton = withLiteObserver(
  ({onPress, navigationStateIndex, index, type, title}: TTabButton) => {
    return (
      <TouchableHighlight
        underlayColor={themeStore.highlight}
        onPress={onPress}
        style={{
          borderBottomWidth: navigationStateIndex === index ? 1.5 : 0,
          borderColor: themeStore.primary,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: themeStore.white,
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}>
          {type === 'themeswitch' && (
            <FontAwesomeIcon
              icon={themeStore.isLight ? 'sun' : 'moon'}
              color={themeStore.primary}
            />
          )}
          <TabButtonTitle
            title={title}
            navigationStateIndex={navigationStateIndex}
          />
        </View>
      </TouchableHighlight>
    );
  },
);

export default TabButton;
