import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ListTasks from './ListTasks';
const DisplayTasks = ({ tasks, setTasks }) => {
    const deleteTask = (index) => {
        const filtered = tasks.filter((_, tempIndex) => tempIndex !== index);
        setTasks(filtered);
    };
    return (<View>
      <Text style={styles.tasksTitleStyle}>Tasks List</Text>
      <ListTasks tasks={tasks} deleteTask={deleteTask}/>
    </View>);
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
