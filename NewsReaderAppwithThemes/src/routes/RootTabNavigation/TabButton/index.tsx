import {TouchableHighlight} from 'react-native';
import React from 'react';
import themeStore from '../../../mobx/Theme';
import {observer} from 'mobx-react-lite';
import {TTabButton} from '../../../types';
import TabButtonSwitch from './TabButtonSwitch';
import TabButtonTitle from './TabButtonTitle';

const TabButton = ({
  onPress,
  navigationStateIndex,
  index,
  type,
  title,
}: TTabButton) => {
  return (
    <TouchableHighlight
      underlayColor={themeStore.colors.highlight}
      onPress={onPress}
      style={{
        borderBottomWidth: navigationStateIndex === index ? 1.5 : 0,
        borderColor: themeStore.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeStore.colors.white,
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
};

export default observer(TabButton);
