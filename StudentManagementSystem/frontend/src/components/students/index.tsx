import React, {useEffect} from 'react';
import StudentItem from './StudentItem';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import EmptyList from './EmptyList';
import {FlatList, StyleSheet, View} from 'react-native';
import studentStore from '../../mobx/Students';
import {COLORS} from '../../styles';

const Students = () => {
  useEffect(() => {
    if (studentStore.students.length === 0) studentStore.getAllStudents();
  }, []);

  return (
    <FlatList
      data={studentStore.students}
      ItemSeparatorComponent={() => (
        <View
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: COLORS.black,
          }}
        />
      )}
      renderItem={item => <StudentItem student={item.item} />}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={<EmptyList />}
    />
  );
};

export default WithThemeAndLiteObserver(Students);
