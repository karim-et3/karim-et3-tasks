import {Text} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from '../../hoc';
import {THomeText} from '../../types';
import translationStore from '../../mobx/Translation';

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
      {translationStore.get('welcome')}{' '}
      <Text style={{fontSize: 33, fontWeight: '600'}}>{username}.</Text>
    </Text>
  );
};

export default withObserverAndTheme(HomeText);
