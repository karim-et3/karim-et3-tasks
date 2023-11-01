import React from 'react';
import StudentItem from './StudentItem';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import {EmptyList} from '../../common';
import {FlatList, StyleSheet, View} from 'react-native';
import studentStore from '../../mobx/Student';
import {LoadingModal} from '../../common';
import {RootStackNavigationProp} from '../../types';

type Props = {navigation: RootStackNavigationProp};

const Students = WithThemeAndLiteObserver<Props>(props => {
  const {navigation, theme} = props;
  const {COLORS} = theme;

  return (
    <>
      {studentStore.isLoading ? (
        <LoadingModal />
      ) : (
        <FlatList
          data={studentStore.getStudents}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: COLORS.black,
              }}
            />
          )}
          renderItem={item => (
            <StudentItem navigation={navigation} student={item.item} />
          )}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={<EmptyList text="No Students." />}
        />
      )}
    </>
  );
});

export default Students;
