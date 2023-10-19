import {View} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {CustomButton} from '../../../common';
import {ParamListBase} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

type Props = {
  navigation: StackScreenProps<ParamListBase>;
  id: number;
};
const SubjectsGradesButtons = WithThemeAndLiteObserver<Props>(props => {
  const {navigation, id, theme} = props;
  const {COLORS} = theme;
  return (
    <View style={{flexDirection: 'row', flex: 1, gap: 12}}>
      <CustomButton
        text="Courses"
        textColor={COLORS.white}
        backgroundColor={COLORS.primary}
        shadow="medium"
        onPress={() =>
          navigation.navigate('add-course-to-student', {
            id,
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
            id,
          })
        }
      />
    </View>
  );
});

export default SubjectsGradesButtons;
