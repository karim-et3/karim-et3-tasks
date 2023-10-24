import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import studentStore from '../../../mobx/Student';
import courseStore from '../../../mobx/Course';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {FlatList} from 'react-native-gesture-handler';
import {CustomButton} from '../../../common';
import LoadingModal from '../../../common/LoadingModal';
import gradeStore from '../../../mobx/Grade';
import StudentCourseItem from './StudentCourseItem';

const AddCoursesToStudent = WithThemeAndLiteObserver<{}>(props => {
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
          />

          <View style={{margin: SIZES.medium}}>
            <CustomButton
              text={'Submit'}
              textColor={COLORS.white}
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
