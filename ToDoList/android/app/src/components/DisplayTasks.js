import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const DisplayTasks = ({tasks, setTasks}) => {
  return (
    <View>
      <Text style={styles.tasksTitleStyle}>Tasks List</Text>
      <View style={styles.tasksContainerStyle}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.tasksSubContainerStyle}>
            <Text style={styles.tasksStyle}>{task}</Text>
            <TouchableOpacity
              onPress={() => {
                setTasks(
                  tasks.filter((tempTask, tempIndex) => {
                    if (index === tempIndex) return;
                    return tempTask;
                  }),
                );
                console.log(tasks);
              }}>
              <Feather name="delete" style={{fontSize: 24}} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
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
  tasksContainerStyle: {
    gap: 3,
    marginHorizontal: 14,
  },
  tasksSubContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tasksStyle: {
    fontSize: 18,
  },
});
