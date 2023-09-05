import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [tasks, setTasks] = useState([
    'Install visual studio',
    'Download brew',
    'android device setup',
    'Install xcode',
  ]);
  const [pendingtask, setPendingTask] = useState('');

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 24, marginVertical: 14}}>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View style={{position: 'relative'}}>
          <Text style={styles.tasksTitleStyle}>Tasks List</Text>
          <View style={styles.tasksContainerStyle}>
            {tasks.map((task, index) => (
              <Text key={index} style={styles.tasksStyle}>
                {task}
              </Text>
            ))}
          </View>
        </View>
        <View>
          <Text style={[styles.tasksTitleStyle, {textAlign: 'center'}]}>
            Adding a new Task
          </Text>
          <TextInput
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              marginHorizontal: 10,
              padding: 8,
              borderRadius: 8,
            }}
            value={pendingtask}
            onChangeText={setPendingTask}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 180,
                marginVertical: 20,
              }}>
              <Button
                color="#fb7185"
                title="add"
                onPress={() => {
                  if (pendingtask !== '') {
                    setTasks(tasks => [...tasks, pendingtask]);
                    setPendingTask('');
                  }
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  tasksTitleStyle: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '500',
    color: '#fb7185',
  },
  tasksContainerStyle: {
    marginLeft: 14,
  },
  tasksStyle: {
    fontSize: 18,
  },
});

export default App;
