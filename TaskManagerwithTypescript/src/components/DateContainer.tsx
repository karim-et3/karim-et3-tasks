import React from 'react';
import DatePickerComponent from './DatePickerComponent';
import {TDateContainerProp} from '../types';

const DateContainer = ({
  creationDate,
  setCreationDate,
  expiryDate,
  setExpiryDate,
}: TDateContainerProp) => {
  return (
    <>
      <DatePickerComponent
        title={'Created At'}
        date={creationDate}
        setDate={setCreationDate}
      />
      <DatePickerComponent
        title={'Deadline'}
        date={expiryDate}
        setDate={setExpiryDate}
      />
    </>
  );
};

export default DateContainer;
