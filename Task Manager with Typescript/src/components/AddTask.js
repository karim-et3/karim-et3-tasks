import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const AddTask = ({pendingTask, setPendingTask, setTasks}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <View>
      <Text style={[styles.tasksTitleStyle, {textAlign: 'center'}]}>
        Adding a new Task
      </Text>
      <TextInput
        style={styles.inputStyle}
        value={pendingTask}
        onChangeText={setPendingTask}
      />
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <View style={styles.buttonContainerStyle}>
        <View style={styles.buttonSubContainerStyle}>
          <Button
            color="#fb7185"
            title="add"
            onPress={() => {
              if (pendingTask !== '') {
                setTasks(tasks => [...tasks, pendingTask]);
                setPendingTask('');
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AddTask;
const styles = StyleSheet.create({
  tasksTitleStyle: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '500',
    color: '#fb7185',
  },
  tasksContainerStyle: {
    gap: 3,
    marginHorizontal: 14,
  },
  tasksSubContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tasksStyle: {
    fontSize: 18,
  },
  inputStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 8,
  },
  buttonContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSubContainerStyle: {
    width: 180,
    marginVertical: 20,
  },
});
