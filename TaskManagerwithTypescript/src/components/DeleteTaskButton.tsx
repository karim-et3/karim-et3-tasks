import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {TDeleteTaskButton} from '../types';
import {colors} from '../styles';

const DeleteTaskButton = ({deleteTask, index}: TDeleteTaskButton) => {
  return (
    <TouchableOpacity
      onPress={() => deleteTask(index)}
      style={{
        position: 'absolute',
        right: 0,
        backgroundColor: colors.primary,
        paddingVertical: 5,
        paddingHorizontal: 10,
      }}>
      <MaterialCommunityIcons
        name="delete-variant"
        style={{fontSize: 24, color: colors.white}}
      />
    </TouchableOpacity>
  );
};

export default DeleteTaskButton;
