import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import InputArea from '../common/InputArea';
import {COLORS} from '../../constants';
import {TUsernameInput} from '../../types';

const UsernameInput = ({name, setName}: TUsernameInput) => {
  return (
    <InputArea
      value={name}
      setValue={setName}
      icon={
        <FontAwesomeIcon icon="user-gear" size={24} color={COLORS.primary} />
      }
      placeholder="Username"
    />
  );
};

export default UsernameInput;
