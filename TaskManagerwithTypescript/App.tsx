import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import AddTask from './src/components/AddTask';
import DisplayTasks from './src/components/DisplayTasks';
import Toast, {BaseToastProps, ErrorToast} from 'react-native-toast-message';

function App(): JSX.Element {
  const [tasks, setTasks] = useState([
    {
      task: 'Install visual studio',
      created_at: new Date('2023-9-23'),
      expire_at: new Date('2023-9-26'),
    },
    {
      task: 'Download brew',
      created_at: new Date('2023-11-23'),
      expire_at: new Date('2023-12-20'),
    },
    {
      task: 'android device setup',
      created_at: new Date('2013-12-23'),
      expire_at: new Date('2024-02-24'),
    },
  ]);
  const [pendingTask, setPendingTask] = useState('');

  useEffect(() => {
    console.log(tasks), [tasks];
  });

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 24, marginVertical: 14}}>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <DisplayTasks setTasks={setTasks} tasks={tasks} />
        <AddTask
          setTasks={setTasks}
          pendingTask={pendingTask}
          setPendingTask={setPendingTask}
        />
      </View>
      <Toast config={config} />
    </SafeAreaView>
  );
}
const config = {
  error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
    />
  ),
};

export default App;
