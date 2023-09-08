import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListTasks from './ListTasks';

type DisplayTasksProps = {
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        task: string;
        created_at: Date;
        expire_at: Date;
      }[]
    >
  >;
  tasks: {
    task: string;
    created_at: Date;
    expire_at: Date;
  }[];
};

const DisplayTasks = ({tasks, setTasks}: DisplayTasksProps) => {
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, tempIndex: number) => tempIndex !== index));
  };

  return (
    <View>
      <Text style={styles.tasksTitleStyle}>Tasks List</Text>
      <ListTasks tasks={tasks} deleteTask={deleteTask} />
    </View>
  );
};

export default DisplayTasks;

const styles = StyleSheet.create({
  tasksTitleStyle: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '500',
    color: '#fb7185',
  },
});
