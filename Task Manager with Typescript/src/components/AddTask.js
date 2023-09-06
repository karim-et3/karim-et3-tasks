import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const AddTask = ({pendingTask, setPendingTask, setTasks}) => {
  const [openCreationDate, setOpenCreationDate] = useState(false);
  const [openExpiryDate, setOpenExpiryDate] = useState(false);
  const [creationDate, setCreationDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());

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
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={{fontWeight: '700'}}>Created At:</Text>
        <View style={{width: 250}}>
          <Button
            onPress={() => setOpenCreationDate(true)}
            color="#fca5a5"
            title={creationDate ? creationDate.toString() : 'Add creation date'}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={{fontWeight: '700'}}>Deadline:</Text>
        <View style={{width: 250}}>
          <Button
            onPress={() => setOpenExpiryDate(true)}
            color="#fca5a5"
            title={expiryDate ? expiryDate.toString() : 'Add deadline'}
          />
        </View>
      </View>
      <DatePicker
        modal
        open={openCreationDate}
        date={creationDate}
        onConfirm={date => {
          setOpenCreationDate(false);
          setCreationDate(date);
        }}
        onCancel={() => {
          setCreationDate(false);
        }}
      />
      <DatePicker
        modal
        open={openExpiryDate}
        date={expiryDate}
        onConfirm={date => {
          setOpenExpiryDate(false);
          setExpiryDate(date);
        }}
        onCancel={() => {
          setExpiryDate(false);
        }}
      />
      <View style={styles.buttonContainerStyle}>
        <View style={styles.buttonSubContainerStyle}>
          <Button
            color="#fb7185"
            title="add"
            onPress={() => {
              if (pendingTask !== '') {
                setTasks(tasks => [
                  ...tasks,
                  {
                    task: pendingTask,
                    created_at: creationDate,
                    expired_at: expiryDate,
                  },
                ]);
                setPendingTask('');
              }
            }}
          />
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
