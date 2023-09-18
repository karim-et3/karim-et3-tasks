import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import InputArea from '../common/InputArea';
import {TUsernameInput} from '../../types';
import {withLiteObserverAndTheme} from '../hoc';

const UsernameInput = ({name, setName, COLORS}: TUsernameInput) => {
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

export default withLiteObserverAndTheme(UsernameInput);
