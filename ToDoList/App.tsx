import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

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
              <View
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
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
                    const numbers = [100, 200, null, 300];
                    console.log(numbers.forEach(total => console.log(total)));
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
    gap: 3,
    marginHorizontal: 14,
  },
  tasksStyle: {
    fontSize: 18,
  },
});

export default App;
