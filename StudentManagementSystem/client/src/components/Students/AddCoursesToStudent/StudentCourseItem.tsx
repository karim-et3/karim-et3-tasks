import {View, Text} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TCourses} from '../../../types';
import gradeStore from '../../../mobx/Grade';

type Props = {course: TCourses};
const StudentCourseItem = WithThemeAndLiteObserver<Props>(props => {
  const {course, theme} = props;
  const {COLORS, SIZES} = theme;
  return (
    <View
      style={{
        backgroundColor: COLORS.slate,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COLORS.grey,
        width: 120,
        padding: 10,
      }}>
      <BouncyCheckbox
        textComponent={
          <Text
            numberOfLines={1}
            style={{
              width: '70%',
              marginLeft: 5,
              fontSize: SIZES.medium,
            }}>
            {course.code}
          </Text>
        }
        size={24}
        isChecked={gradeStore.grades.some(
          grade => grade.courseID === course.id,
        )}
        textContainerStyle={{marginLeft: 5}}
        fillColor={COLORS.primary}
        unfillColor={COLORS.white}
        innerIconStyle={{borderWidth: 2}}
        onPress={(isChecked: boolean) => {
          if (isChecked) gradeStore.addCoursesChecked(course.id);
          else gradeStore.removeCoursesChecked(course.id);
        }}
      />
    </View>
  );
});

export default StudentCourseItem;
