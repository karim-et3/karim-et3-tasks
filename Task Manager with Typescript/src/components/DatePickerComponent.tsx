import {StyleSheet, Text, Button, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

type DatePickerComponentProps = {
  title: string;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

const DatePickerComponent = ({
  title,
  date,
  setDate,
}: DatePickerComponentProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => setOpen(true)}
            color="#fca5a5"
            title={date ? date.toString() : 'Add creation date'}
          />
        </View>
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setDate(new Date());
        }}
      />
    </>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  titleStyle: {
    fontWeight: '700',
  },
  buttonContainer: {
    width: 250,
  },
});
