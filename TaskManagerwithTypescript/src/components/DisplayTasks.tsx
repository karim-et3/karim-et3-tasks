import {Text, View} from 'react-native';
import React from 'react';
import ListTasks from './ListTasks';
import {TDisplayTasksProps} from '../types';

const DisplayTasks = ({tasks, setTasks}: TDisplayTasksProps) => {
  const deleteTask = (index: number) => {
    const filtered = tasks.filter(
      (_, tempIndex: number) => tempIndex !== index,
    );
    setTasks(filtered);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 8,
          fontWeight: '500',
          color: '#fb7185',
        }}>
        Tasks List
      </Text>
      <ListTasks tasks={tasks} deleteTask={deleteTask} />
    </View>
  );
};

export default DisplayTasks;
