import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import studentStore from '../../../mobx/Student';
import courseStore from '../../../mobx/Course';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {FlatList} from 'react-native-gesture-handler';
import {CustomButton} from '../../../common';
import {LoadingModal} from '../../../common';
import gradeStore from '../../../mobx/Grade';
import StudentCourseItem from './StudentCourseItem';
import EmptyList from '../../../common/EmptyList';
import {RouteProp} from '@react-navigation/native';

type Props = {
  route: RouteProp<{params: {id: number}}, 'params'>;
};
const AddCoursesToStudent = WithThemeAndLiteObserver<Props>(props => {
  const {route, theme} = props;
  const {COLORS, FONTS, SIZES} = theme;
  const {id} = route.params;
  useEffect(() => {
    gradeStore.fetchGradesForStudent(id);
  }, []);

  return (
    <>
      {gradeStore.isLoading ? (
        <LoadingModal />
      ) : (
        <View style={{flex: 1, margin: SIZES.xxLarge}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: SIZES.large,
            }}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SIZES.large,
                fontWeight: FONTS.medium,
              }}>
              {`${studentStore.firstName} ${studentStore.lastName}`}
            </Text>
          </View>
          <FlatList
            columnWrapperStyle={{
              justifyContent: 'center',
              gap: 14,
            }}
            contentContainerStyle={{gap: 8}}
            numColumns={2}
            style={{alignSelf: 'center'}}
            data={courseStore.getCourses}
            renderItem={item => <StudentCourseItem course={item.item} />}
            ListEmptyComponent={<EmptyList text={'No Courses.'} />}
          />

          <View style={{margin: SIZES.medium}}>
            <CustomButton
              disabled={courseStore.getCourses.length === 0}
              text={'Submit'}
              textColor={COLORS.white}
              shadow="medium"
              backgroundColor={COLORS.primary}
              onPress={() => gradeStore.postCoursesChecked(id)}
            />
          </View>
        </View>
      )}
    </>
  );
});

export default AddCoursesToStudent;
