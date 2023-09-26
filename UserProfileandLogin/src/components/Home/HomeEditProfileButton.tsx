import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from '../../hoc';
import {THomeEditProfileButton} from '../../types';
import i18n from '../../mobx/i18n';

const HomeEditProfileButton = ({
  COLORS,
  navigation,
}: THomeEditProfileButton) => {
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
      <Text style={{color: COLORS.white}}>{i18n.get('edit-profile')}</Text>
    </TouchableOpacity>
  );
};

export default withObserverAndTheme(HomeEditProfileButton);
