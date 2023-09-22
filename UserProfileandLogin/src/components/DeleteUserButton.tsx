import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from './hoc';
import {TDeleteUserButton} from '../types';
import usersStore from '../mobx/Users';
import langaugeStore from '../mobx/Language';

const DeleteUserButton = ({id, COLORS, SIZES}: TDeleteUserButton) => {
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
      <Text style={{color: COLORS.white}}>
        {langaugeStore.translate('delete')}
      </Text>
    </TouchableOpacity>
  );
};

export default withObserverAndTheme(DeleteUserButton);
