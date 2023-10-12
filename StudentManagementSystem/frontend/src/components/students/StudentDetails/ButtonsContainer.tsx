import {View} from 'react-native';
import React from 'react';
import SubjectsGradesButtons from './SubjectsGradesButtons';
import studentDetailsStore from '../../../mobx/StudentDetails';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {SIZES} from '../../../styles';
import {CustomButton} from '../../../common';

const ButtonsContainer = ({setModalVisible, navigation, COLORS}) => {
  return (
    <View style={{gap: 16, marginVertical: SIZES.large}}>
      <SubjectsGradesButtons
        navigation={navigation}
        id={studentDetailsStore.student.id}
      />
      <CustomButton
        text="Edit"
        textColor={COLORS.white}
        backgroundColor={COLORS.green}
        shadow="medium"
        onPress={() =>
          navigation.navigate('edit-student', {
            id: studentDetailsStore.student.id,
          })
        }
      />
      <CustomButton
        text="Delete"
        textColor={COLORS.white}
        backgroundColor={COLORS.error}
        shadow="medium"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default WithThemeAndLiteObserver(ButtonsContainer);
