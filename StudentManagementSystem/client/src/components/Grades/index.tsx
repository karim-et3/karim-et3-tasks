import {View, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import {SelectList} from 'react-native-dropdown-select-list';
import gradeStore from '../../mobx/Grade';
import {CustomButton} from '../../common';

const Grades = WithThemeAndLiteObserver<{}>(props => {
  const {route, theme} = props;
  const {COLORS, SIZES} = theme;
  const {id} = route.params;
  useEffect(() => {
    gradeStore.fetchGradesForStudent(id);
    // gradeStore.setCoursesCheckedNames();
  }, []);
  useEffect(() => {
    return () => {
      gradeStore.resetInput();
    };
  }, []);

  return (
    <View style={{marginTop: 120, marginHorizontal: SIZES.xxLarge}}>
      <View onTouchStart={() => gradeStore.setFocusGrade()}>
        <SelectList
          data={gradeStore.getCoursesCheckedNames}
          setSelected={(course: string) => gradeStore.setTempCourse(course)}
          notFoundText="No registered courses."
          boxStyles={{
            borderColor: gradeStore.getFocusGrade
              ? COLORS.primary
              : COLORS.grey,
          }}
          maxHeight={100}
          search={false}
          placeholder="Subject"
          dropdownStyles={{
            backgroundColor: COLORS.slate,
            borderColor: gradeStore.getFocusGrade
              ? COLORS.primary
              : COLORS.grey,
          }}
        />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          width: '15%',
          borderBottomColor: COLORS.primary,
          alignSelf: 'center',
        }}>
        <TextInput
          style={{
            paddingBottom: 3,
            marginTop: SIZES.large,
            alignSelf: 'center',
          }}
          value={gradeStore.getTempGrade?.toString()}
          keyboardType={'numeric'}
          maxLength={3}
          onChangeText={e => gradeStore.setTempGrade(e)}
          placeholder="0"
        />
      </View>
      <CustomButton
        style={{marginTop: 60}}
        text={'ADD'}
        textColor={COLORS.white}
        backgroundColor={COLORS.primary}
        onPress={() => gradeStore.postGrade(id)}
      />
    </View>
  );
});

export default Grades;
