import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import InputArea from '../common/InputArea';
import {COLORS} from '../../constants';
import {TAddressInput} from '../../types';
const AddressInput = ({address, setAddress}: TAddressInput) => {
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

export default AddressInput;
