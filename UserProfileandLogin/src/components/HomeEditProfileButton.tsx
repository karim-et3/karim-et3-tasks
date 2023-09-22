import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from './hoc';
import {TCOLORS, Tnavigation} from '../types';
import {useTranslation} from 'react-i18next';

const HomeEditProfileButton = ({
  COLORS,
  navigation,
}: {
  COLORS: TCOLORS;
  navigation: Tnavigation;
}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginTop: 20,
        paddingVertical: 10,
        marginHorizontal: 135,
      }}
      onPress={() => navigation.navigate('edit')}>
      <Text style={{color: COLORS.white}}>{t('edit-profile')}</Text>
    </TouchableOpacity>
  );
};

export default withObserverAndTheme(HomeEditProfileButton);
