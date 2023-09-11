import {Text, View} from 'react-native';
import React from 'react';
import {TTaskProp} from '../types';
import DeleteTaskButton from './DeleteTaskButton';

const Task = ({task, index, deleteTask}: TTaskProp) => (
  <View
    key={index}
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 5,
      paddingHorizontal: 10,
      paddingRight: 50,
      borderRadius: 5,
      borderWidth: 1,
      backgroundColor: '#f3f4f6',
      borderColor: 'red',
      marginVertical: 5,
    }}>
    <Text style={{color: '#374151', fontSize: 18}}>{task.task}</Text>
    <Text>{task.expire_at.toLocaleDateString()}</Text>
    <DeleteTaskButton deleteTask={deleteTask} index={index} />
  </View>
);

export default Task;
