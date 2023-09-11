import { StyleSheet, View } from 'react-native';
import React from 'react';
import Task from './Task';
const ListTasks = ({ tasks, deleteTask }) => (<View style={styles.tasksContainerStyle}>
    {tasks.map((task, index) => (<Task task={task} key={index} index={index} deleteTask={deleteTask}/>))}
  </View>);
export default ListTasks;
const styles = StyleSheet.create({
    tasksContainerStyle: {
        gap: 3,
        marginHorizontal: 14,
    },
});
