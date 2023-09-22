import {Text} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from './hoc';
import {useTranslation} from 'react-i18next';

const HomeText = ({COLORS, userStore}) => {
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
      {t('welcome')}{' '}
      <Text style={{fontSize: 33, fontWeight: '600'}}>
        {userStore.user.username}.
      </Text>
    </Text>
  );
};

export default withObserverAndTheme(HomeText);
