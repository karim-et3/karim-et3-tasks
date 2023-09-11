import React from 'react';
import DatePickerComponent from './DatePickerComponent';
const DateContainer = ({ creationDate, setCreationDate, expiryDate, setExpiryDate, }) => {
    return (<>
      <DatePickerComponent title={'Created At'} date={creationDate} setDate={setCreationDate}/>
      <DatePickerComponent title={'Deadline'} date={expiryDate} setDate={setExpiryDate}/>
    </>);
};
export default DateContainer;
