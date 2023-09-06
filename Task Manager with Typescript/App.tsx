import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import AddTask from './src/components/AddTask';
import DisplayTasks from './src/components/DisplayTasks';

function App(): JSX.Element {
  const [tasks, setTasks] = useState([
    {task: 'Install visual studio', created_at: '24/10/2023'},
    {task: 'Download brew', created_at: '01/11/2023'},
    {task: 'android device setup', created_at: '13/12/2023'},
    {task: 'Install xcode', created_at: '10/02/2024'},
  ]);
  const [pendingTask, setPendingTask] = useState('');
  useEffect(() => {
    console.log(tasks), [tasks];
  });
  return (
    <SafeAreaView style={styles.mainContainrStyle}>
      <View style={styles.subMainContainerStyle}>
        <DisplayTasks setTasks={setTasks} tasks={tasks} />
        <AddTask
          setTasks={setTasks}
          pendingTask={pendingTask}
          setPendingTask={setPendingTask}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainrStyle: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 14,
  },
  subMainContainerStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default App;
