import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import studentDetailsStore from '../../mobx/StudentDetails';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import coursesStore from '../../mobx/Courses';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import {FlatList} from 'react-native-gesture-handler';
import {CustomButton} from '../../common';
import gradesStore from '../../mobx/Grades';

const AddCoursesToStudent = ({COLORS, FONTS, SIZES}) => {
  useEffect(() => {
    coursesStore.fetchCourses();
    gradesStore.getGradesForStudent(studentDetailsStore.id);
  }, []);
  return (
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
          {`${studentDetailsStore.firstName} ${studentDetailsStore.lastName}`}
        </Text>
      </View>
      <FlatList
        columnWrapperStyle={{
          justifyContent: 'space-between',
          padding: 3,
          alignSelf: 'center',
        }}
        numColumns={2}
        style={{alignSelf: 'center', margin: SIZES.large}}
        data={coursesStore.getCourses}
        renderItem={item => (
          <BouncyCheckbox
            textComponent={
              <Text style={{marginLeft: 5, fontSize: SIZES.medium}}>
                {item.item.code}
              </Text>
            }
            style={{width: '45%'}}
            size={24}
            isChecked={gradesStore.grades.some(
              grade => grade.course_id === item.item.id,
            )}
            textContainerStyle={{marginLeft: 5}}
            fillColor={COLORS.primary}
            unfillColor={COLORS.white}
            innerIconStyle={{borderWidth: 2}}
            onPress={(isChecked: boolean) => {
              if (isChecked) gradesStore.addCoursesChecked(item.item.id);
              else gradesStore.removeCoursesChecked(item.item.id);
            }}
          />
        )}
      />
      <View style={{justifyContent: 'flex-end'}}>
        <CustomButton
          text={'Submit'}
          textColor={COLORS.white}
          backgroundColor={COLORS.primary}
          onPress={() => gradesStore.postCoursesChecked()}
        />
      </View>
    </View>
  );
};

export default WithThemeAndLiteObserver(AddCoursesToStudent);
