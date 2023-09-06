import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type TaskProp = {
  task: {task: string; expire_at: Date; created_at: Date};
  index: number;
};
interface TaskType {
  task: string;
  expire_at: Date;
  created_at: Date;
}
type DisplayTasks = {
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

const DisplayTasks = ({tasks, setTasks}: DisplayTasks) => {
  const deleteTask = (index: number): void => {
    setTasks(
      tasks.filter((tempTask: TaskType, tempIndex: number) => {
        if (index === tempIndex) return;
        return tempTask;
      }),
    );
  };

  const Task = ({task, index}: TaskProp) => (
    <View
      key={index}
      style={[styles.tasksSubContainerStyle, {position: 'relative'}]}>
      <Text style={styles.tasksStyle}>{task.task}</Text>
      <Text>{task.expire_at.toLocaleDateString()}</Text>
      <TouchableOpacity
        onPress={() => deleteTask(index)}
        style={{
          position: 'absolute',
          right: 0,
          backgroundColor: '#fb7185',
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}>
        <MaterialCommunityIcons
          name="delete-variant"
          style={{fontSize: 24, color: '#e7e5e4'}}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text style={styles.tasksTitleStyle}>Tasks List</Text>
      <View style={styles.tasksContainerStyle}>
        {tasks.map((task: TaskType, index: number) => (
          <Task task={task} key={index} index={index} />
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
