import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import AddTask from './src/components/AddTask';
import DisplayTasks from './src/components/DisplayTasks';

function App(): JSX.Element {
  const [tasks, setTasks] = useState([
    'Install visual studio',
    'Download brew',
    'android device setup',
    'Install xcode',
  ]);
  const [pendingTask, setPendingTask] = useState('');

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
