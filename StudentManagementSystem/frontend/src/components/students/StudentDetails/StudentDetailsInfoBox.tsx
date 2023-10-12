import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {TStudentDetailsBox} from '../../../types';

const StudentDetailsBox = ({COLORS, SIZES, icon, data}: TStudentDetailsBox) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 8,
      }}>
      <FontAwesomeIcon icon={icon} color={COLORS.secondary} />
      <Text
        style={{
          color: data ? COLORS.secondary : COLORS.error,
          fontSize: SIZES.medium,
          textAlign: 'center',
        }}>
        {data ? data : 'No record.'}
      </Text>
    </View>
  );
};

export default WithThemeAndLiteObserver(StudentDetailsBox);
