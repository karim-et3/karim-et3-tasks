import React from 'react';
import DatePickerComponent from './DatePickerComponent';

type DateContainerProp = {
  creationDate: Date;
  setCreationDate: React.Dispatch<React.SetStateAction<Date>>;
  expiryDate: Date;
  setExpiryDate: React.Dispatch<React.SetStateAction<Date>>;
};
const DateContainer = ({
  creationDate,
  setCreationDate,
  expiryDate,
  setExpiryDate,
}: DateContainerProp) => {
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
