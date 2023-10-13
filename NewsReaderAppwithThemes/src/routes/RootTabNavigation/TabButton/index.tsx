import {TouchableHighlight} from 'react-native';
import React from 'react';
import {TTabButton} from '../../../types';
import TabButtonSwitch from './TabButtonSwitch';
import TabButtonTitle from './TabButtonTitle';
import {withLiteObserver} from '../../../hoc';
import themeStore from '../../../mobx/Theme';

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
        {type === 'themeswitch' ? (
          <TabButtonSwitch navigationStateIndex={navigationStateIndex} />
        ) : (
          <TabButtonTitle
            navigationStateIndex={navigationStateIndex}
            index={index}
            title={title}
          />
        )}
      </TouchableHighlight>
    );
  },
);

export default TabButton;
