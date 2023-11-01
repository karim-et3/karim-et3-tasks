import {View, Text} from 'react-native';
import React from 'react';
import SubjectsGradesButtons from './SubjectsGradesButtons';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {CustomButton, CustomModal} from '../../../common';
import modalStore from '../../../mobx/Modal';
import studentStore from '../../../mobx/Student';
import {RootStackNavigationProp} from '../../../types';

type Props = {
  navigation: RootStackNavigationProp;
  id: number;
};
const ButtonsContainer = WithThemeAndLiteObserver<Props>(props => {
  const {id, navigation, theme} = props;
  const {COLORS, FONTS, SIZES} = theme;
  return (
    <View style={{gap: 16, marginVertical: SIZES.large}}>
      {modalStore.isOpenStudentDelete && (
        <CustomModal
          title={
            <Text
              style={{
                color: COLORS.black,
                fontWeight: FONTS.medium,
                fontSize: SIZES.large,
              }}>
              Are you sure you want to delete{' '}
              {
                <Text style={{fontWeight: FONTS.bold}}>
                  '{studentStore.student.firstName}{' '}
                  {studentStore.student.lastName}'{' '}
                </Text>
              }
              ?
            </Text>
          }
          buttonOneText="Cancel"
          buttonOneStyle={{
            backgroundColor: COLORS.grey,
            color: COLORS.white,
          }}
          buttonOneOnPress={() => modalStore.setIsOpenStudentDelete()}
          buttonTwoText="Delete"
          buttonTwoStyle={{
            backgroundColor: COLORS.error,
            color: COLORS.white,
          }}
          buttonTwoOnPress={() => {
            modalStore.setIsOpenStudentDelete();
            studentStore.deleteStudent(id);
          }}
          setModalVisible={() => modalStore.setIsOpenStudentDelete()}
        />
      )}
      <SubjectsGradesButtons navigation={navigation} id={id} />
      <CustomButton
        text="Edit"
        textColor={COLORS.white}
        backgroundColor={COLORS.green}
        shadow="medium"
        onPress={() =>
          navigation.navigate('edit-student', {
            id,
          })
        }
      />

      <CustomButton
        text="Delete"
        textColor={COLORS.white}
        backgroundColor={COLORS.error}
        shadow="medium"
        onPress={() => modalStore.setIsOpenStudentDelete()}
      />
    </View>
  );
});

export default ButtonsContainer;
