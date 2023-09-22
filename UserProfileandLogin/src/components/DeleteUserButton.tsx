import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from './hoc';
import {TCOLORS, TSIZES} from '../types';
import {useTranslation} from 'react-i18next';

const DeleteUserButton = ({
  COLORS,
  SIZES,
}: {
  COLORS: TCOLORS;
  SIZES: TSIZES;
}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.error,
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.xSmall,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      }}>
      <Text style={{color: COLORS.white}}>{t('delete')}</Text>
    </TouchableOpacity>
  );
};

export default withObserverAndTheme(DeleteUserButton);
