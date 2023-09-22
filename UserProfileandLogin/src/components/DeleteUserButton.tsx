import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from './hoc';
import {TCOLORS, TSIZES} from '../types';
import {useTranslation} from 'react-i18next';
import usersStore from '../mobx/Users';

const DeleteUserButton = ({
  COLORS,
  SIZES,
  id,
}: {
  COLORS: TCOLORS;
  SIZES: TSIZES;
  id: number;
}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      onPress={() => usersStore.deleteUser(id)}
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
