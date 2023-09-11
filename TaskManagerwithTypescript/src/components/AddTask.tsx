import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import DateContainer from './DateContainer';
import {colors} from '../styles';
import {TAddTaskProp} from '../types';
import AddTaskButton from './AddTaskButton';

const AddTask = ({pendingTask, setPendingTask, setTasks}: TAddTaskProp) => {
  const [expiryDate, setExpiryDate] = useState<Date>(new Date());
  const [creationDate, setCreationDate] = useState<Date>(new Date());

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 8,
          fontWeight: '500',
          color: colors.primary,
          textAlign: 'center',
        }}>
        Adding a new Task
      </Text>
      <TextInput
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          marginHorizontal: 10,
          padding: 8,
          borderRadius: 8,
        }}
        value={pendingTask}
        onChangeText={setPendingTask}
        placeholder="Your Task"
      />
      <DateContainer
        expiryDate={expiryDate}
        setExpiryDate={setExpiryDate}
        creationDate={creationDate}
        setCreationDate={setCreationDate}
      />

      <AddTaskButton
        pendingTask={pendingTask}
        setTasks={setTasks}
        setPendingTask={setPendingTask}
        creationDate={creationDate}
        expiryDate={expiryDate}
      />
    </View>
  );
};

export default AddTask;
