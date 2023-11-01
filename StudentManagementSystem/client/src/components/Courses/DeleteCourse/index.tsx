import React from 'react';
import {CustomButton, CustomModal} from '../../../common';
import courseStore from '../../../mobx/Course';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View, Text} from 'react-native';
import modalStore from '../../../mobx/Modal';

type Props = {
  id: number;
};
const DeleteCourse = WithThemeAndLiteObserver<Props>(props => {
  const {id, theme} = props;
  const {COLORS, FONTS, SIZES} = theme;
  return (
    <View style={{width: '100%'}}>
      {modalStore.isOpenCourseDelete && (
        <CustomModal
          title={
            <>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: SIZES.xLarge,
                  fontWeight: FONTS.bold,
                }}>
                Attention!
              </Text>
              <Text style={{marginTop: SIZES.large}}>
                Deleting this Course will also delete all enrolled students
                grades.
              </Text>
            </>
          }
          buttonOneText={'cancel'}
          buttonOneStyle={{
            backgroundColor: COLORS.grey,
            color: COLORS.white,
          }}
          buttonOneOnPress={() => modalStore.setIsOpenCourseDelete()}
          buttonTwoText={'Delete'}
          buttonTwoStyle={{
            backgroundColor: COLORS.error,
            color: COLORS.white,
          }}
          buttonTwoOnPress={() => {
            modalStore.setIsOpenCourseDelete();
            courseStore.deleteCourse(id);
          }}
          setModalVisible={() => modalStore.setIsOpenCourseDelete()}
        />
      )}
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
          width: 40,
        }}>
        <CustomButton
          text={
            <FontAwesomeIcon icon="trash-can" size={22} color={COLORS.error} />
          }
          textColor={COLORS.white}
          backgroundColor={COLORS.white}
          onPress={() => modalStore.setIsOpenCourseDelete()}
        />
      </View>
    </View>
  );
});

export default DeleteCourse;
