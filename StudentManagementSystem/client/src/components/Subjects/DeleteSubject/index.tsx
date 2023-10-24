import React from 'react';
import {CustomButton} from '../../../common';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View} from 'react-native';
import subjectStore from '../../../mobx/Subject';

type Props = {
  id: number;
};
const DeleteSubject = WithThemeAndLiteObserver<Props>(props => {
  const {id, theme} = props;
  const {SIZES, COLORS} = theme;
  return (
    <View style={{width: '100%'}}>
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
          onPress={() => subjectStore.deleteSubject({id})}
        />
      </View>
    </View>
  );
});

export default DeleteSubject;
