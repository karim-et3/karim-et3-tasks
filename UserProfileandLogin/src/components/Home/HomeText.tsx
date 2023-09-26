import {Text} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from '../../hoc';
import {THomeText} from '../../types';
import i18n from '../../mobx/i18n';

const HomeText = ({COLORS, username}: THomeText) => {
  return (
    <Text
      style={{
        fontSize: 28,
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 100,
        fontWeight: '500',
      }}>
      {i18n.get('welcome')}{' '}
      <Text style={{fontSize: 33, fontWeight: '600'}}>{username}.</Text>
    </Text>
  );
};

export default withObserverAndTheme(HomeText);
