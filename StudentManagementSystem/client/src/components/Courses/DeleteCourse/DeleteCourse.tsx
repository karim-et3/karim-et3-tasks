import React from 'react';
import {CustomButton} from '../../../common';
import courseStore from '../../../mobx/Course';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View} from 'react-native';

type Props = {
  id: number;
};
const DeleteCourse = WithThemeAndLiteObserver<Props>(props => {
  const {id, theme} = props;
  const {COLORS} = theme;
  return (
    <View style={{width: '90%'}}>
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
          onPress={() => courseStore.deleteCourse(id)}
        />
      </View>
    </View>
  );
});

export default DeleteCourse;
