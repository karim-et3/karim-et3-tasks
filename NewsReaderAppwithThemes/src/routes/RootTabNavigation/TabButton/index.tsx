import {TouchableHighlight} from 'react-native';
import React from 'react';
import {TTabButton} from '../../../types';
import TabButtonSwitch from './TabButtonSwitch';
import TabButtonTitle from './TabButtonTitle';
import {WithThemeAndLiteObserver} from '../../../components/hoc';

const TabButton = ({
  COLORS,
  onPress,
  navigationStateIndex,
  index,
  type,
  title,
}: TTabButton) => {
  return (
    <TouchableHighlight
      underlayColor={COLORS.highlight}
      onPress={onPress}
      style={{
        borderBottomWidth: navigationStateIndex === index ? 1.5 : 0,
        borderColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
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

export default WithThemeAndLiteObserver(TabButton);
