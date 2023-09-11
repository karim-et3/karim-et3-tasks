import {View, Button} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import {TAddTaskButton} from '../types';
import {colors} from '../styles';

const AddTaskButton = ({
  pendingTask,
  setTasks,
  setPendingTask,
  expiryDate,
  creationDate,
}: TAddTaskButton) => {
  const handleAddTask = () => {
    if (pendingTask.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Enter a Task.',
      });
    } else if (pendingTask.length <= 5) {
      Toast.show({
        type: 'error',
        text1: 'Task must be at least 6 characters.',
      });
    } else if (pendingTask.length > 25) {
      Toast.show({
        type: 'error',
        text1: 'Task too long. Maximum is 25 characters.',
      });
    } else {
      const taskToAdd = {
        task: pendingTask,
        created_at: creationDate,
        expire_at: expiryDate,
      };
      setTasks(tasks => [...tasks, taskToAdd]);
      setPendingTask('');
    }
  };
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width: 180, marginVertical: 20}}>
        <Button color={colors.primary} title="add" onPress={handleAddTask} />
      </View>
    </View>
  );
};

export default AddTaskButton;
