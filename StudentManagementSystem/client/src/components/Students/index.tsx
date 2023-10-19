import React, {useEffect} from 'react';
import StudentItem from './StudentItem';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import EmptyList from './EmptyList';
import {FlatList, StyleSheet, View} from 'react-native';
import studentStore from '../../mobx/Student';
import {COLORS} from '../../styles';
import LoadingModal from '../../common/LoadingModal';

const Students = WithThemeAndLiteObserver<{}>(() => {
  useEffect(() => {
    if (studentStore.students.length === 0) studentStore.fetchStudents();
  }, [studentStore.getStudents]);

  return (
    <>
      {studentStore.isLoading ? (
        <LoadingModal />
      ) : (
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
      )}
    </>
  );
});

export default Students;
