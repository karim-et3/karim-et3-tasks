import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type TaskProp = {
  task: {task: string; expire_at: Date; created_at: Date};
  index: number;
  deleteTask: (index: number) => void;
};

const Task = ({task, index, deleteTask}: TaskProp) => (
  <View
    key={index}
    style={[styles.tasksSubContainerStyle, {position: 'relative'}]}>
    <Text style={styles.tasksStyle}>{task.task}</Text>
    <Text>{task.expire_at.toLocaleDateString()}</Text>
    <TouchableOpacity
      onPress={() => deleteTask(index)}
      style={styles.buttonContainer}>
      <MaterialCommunityIcons name="delete-variant" style={styles.button} />
    </TouchableOpacity>
  </View>
);

export default Task;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#fb7185',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  button: {
    ontSize: 24,
    color: '#e7e5e4',
  },
  tasksSubContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 50,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#f3f4f6',
    borderColor: 'red',
    marginVertical: 5,
  },
  tasksStyle: {
    fontSize: 18,
  },
});
