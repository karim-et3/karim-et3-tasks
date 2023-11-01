import {View} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {CustomButton} from '../../../common';
import {RootStackNavigationProp} from '../../../types';

type Props = {
  navigation: RootStackNavigationProp;
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
          navigation.navigate('grades', {
            id,
          })
        }
      />
    </View>
  );
});

export default SubjectsGradesButtons;
