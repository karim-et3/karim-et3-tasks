import {StyleSheet, View} from 'react-native';
import React from 'react';
import Task from './Task';

interface TaskType {
  task: string;
  expire_at: Date;
  created_at: Date;
}
type ListTasksProp = {
  tasks: {
    task: string;
    created_at: Date;
    expire_at: Date;
  }[];
  deleteTask: (index: number) => void;
};
const ListTasks = ({tasks, deleteTask}: ListTasksProp) => (
  <View style={styles.tasksContainerStyle}>
    {tasks.map((task: TaskType, index: number) => (
      <Task task={task} key={index} index={index} deleteTask={deleteTask} />
    ))}
  </View>
);
export default ListTasks;

const styles = StyleSheet.create({
  tasksContainerStyle: {
    gap: 3,
    marginHorizontal: 14,
  },
});
