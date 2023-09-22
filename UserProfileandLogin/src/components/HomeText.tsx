import {Text} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from './hoc';
import {useTranslation} from 'react-i18next';
import {THomeText} from '../types';
import langaugeStore from '../mobx/Language';

const HomeText = ({COLORS, username}: THomeText) => {
  const {t} = useTranslation();
  return (
    <Text
      style={{
        fontSize: 28,
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 100,
        fontWeight: '500',
      }}>
      {langaugeStore.translate('welcome')}{' '}
      <Text style={{fontSize: 33, fontWeight: '600'}}>{username}.</Text>
    </Text>
  );
};

export default withObserverAndTheme(HomeText);
