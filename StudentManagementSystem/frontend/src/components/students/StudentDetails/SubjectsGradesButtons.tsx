import {View} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {CustomButton} from '../../../common';

const SubjectsGradesButtons = ({navigation, id, COLORS}) => {
  return (
    <View style={{flexDirection: 'row', flex: 1, gap: 12}}>
      <CustomButton
        text="Courses"
        textColor={COLORS.white}
        backgroundColor={COLORS.primary}
        shadow="medium"
        onPress={() =>
          navigation.navigate('add-course-to-student', {
            params: {id: id},
          })
        }
      />
      <CustomButton
        text="Grades"
        textColor={COLORS.white}
        backgroundColor={COLORS.primary}
        shadow="medium"
        onPress={() =>
          navigation.navigate('add-grade', {
            params: {id: id},
          })
        }
      />
    </View>
  );
};

export default WithThemeAndLiteObserver(SubjectsGradesButtons);
