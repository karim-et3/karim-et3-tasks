import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import InputArea from '../common/InputArea';
import {TAddressInput} from '../../types';
import {withLiteObserverAndTheme} from '../hoc';
const AddressInput = ({address, setAddress, COLORS}: TAddressInput) => {
  return (
    <InputArea
      value={address}
      setValue={setAddress}
      icon={
        <FontAwesomeIcon icon="location-dot" size={24} color={COLORS.primary} />
      }
      placeholder="Address"
    />
  );
};

export default withLiteObserverAndTheme(AddressInput);
