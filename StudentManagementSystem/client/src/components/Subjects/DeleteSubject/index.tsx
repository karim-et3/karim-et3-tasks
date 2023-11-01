import React from 'react';
import {CustomButton, CustomModal} from '../../../common';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View, Text} from 'react-native';
import subjectStore from '../../../mobx/Subject';
import modalStore from '../../../mobx/Modal';

type Props = {
  id: number;
};
const DeleteSubject = WithThemeAndLiteObserver<Props>(props => {
  const {id, theme} = props;
  const {SIZES, FONTS, COLORS} = theme;
  return (
    <View style={{width: '100%'}}>
      {modalStore.isOpenSubjectDelete && (
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
                Deleting this subject will also delete all associated courses
                and their enrolled students grades.
              </Text>
            </>
          }
          buttonOneText={'cancel'}
          buttonOneStyle={{
            backgroundColor: COLORS.grey,
            color: COLORS.white,
          }}
          buttonOneOnPress={() => modalStore.setIsOpenSubjectDelete()}
          buttonTwoText={'delete'}
          buttonTwoStyle={{
            backgroundColor: COLORS.error,
            color: COLORS.white,
          }}
          buttonTwoOnPress={() => {
            modalStore.setIsOpenSubjectDelete();
            subjectStore.deleteSubject({id});
          }}
          setModalVisible={() => modalStore.setIsOpenSubjectDelete()}
        />
      )}
      <View
        style={{
          marginBottom: SIZES.small,
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
          onPress={() => modalStore.setIsOpenSubjectDelete()}
        />
      </View>
    </View>
  );
});

export default DeleteSubject;
