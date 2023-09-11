import {View} from 'react-native';
import React from 'react';
import Task from './Task';
import {TTaskType, TListTasksProp} from '../types';

const ListTasks = ({tasks, deleteTask}: TListTasksProp) => (
  <View style={{gap: 10, marginHorizontal: 14}}>
    {tasks.map((task: TTaskType, index: number) => (
      <Task task={task} key={index} index={index} deleteTask={deleteTask} />
    ))}
  </View>
);
export default ListTasks;
