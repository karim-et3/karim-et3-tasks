import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import DateContainer from './DateContainer';

interface AddTaskProp {
  pendingTask: string;
  setPendingTask: React.Dispatch<React.SetStateAction<string>>;
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        task: string;
        created_at: Date;
        expire_at: Date;
      }[]
    >
  >;
}

const AddTask = ({pendingTask, setPendingTask, setTasks}: AddTaskProp) => {
  const [expiryDate, setExpiryDate] = useState<Date>(new Date());
  const [creationDate, setCreationDate] = useState<Date>(new Date());

  const handleAddTask = () => {
    if (pendingTask.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Enter a Task.',
      });
    } else if (pendingTask.length <= 5) {
      Toast.show({
        type: 'error',
        text1: 'Task must be at least 6 characters.',
      });
    } else if (pendingTask.length > 25) {
      Toast.show({
        type: 'error',
        text1: 'Task too long. Maximum is 25 characters.',
      });
    } else {
      setTasks(tasks => [
        ...tasks,
        {
          task: pendingTask,
          created_at: creationDate,
          expire_at: expiryDate,
        },
      ]);
      setPendingTask('');
    }
    
  };

  return (
    <View>
      <Text style={[styles.tasksTitleStyle, {textAlign: 'center'}]}>
        Adding a new Task
      </Text>
      <TextInput
        style={styles.inputStyle}
        value={pendingTask}
        onChangeText={setPendingTask}
        placeholder="Your Task"
      />
      <DateContainer
        expiryDate={expiryDate}
        setExpiryDate={setExpiryDate}
        creationDate={creationDate}
        setCreationDate={setCreationDate}
      />

      <View style={styles.buttonContainerStyle}>
        <View style={styles.buttonSubContainerStyle}>
          <Button color="#fb7185" title="add" onPress={handleAddTask} />
        </View>
      </View>
    </View>
  );
};

export default AddTask;
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
  inputStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 8,
  },
  buttonContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSubContainerStyle: {
    width: 180,
    marginVertical: 20,
  },
});
