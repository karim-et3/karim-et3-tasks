import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {T_Student} from '../../../types';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import LinkButton from '../../../common/LinkButton';
import Animated, {FadeIn, FadeOutUp} from 'react-native-reanimated';

type Props = {
  student: T_Student;
};
const StudentItem = WithThemeAndLiteObserver<Props>(props => {
  const {student, theme} = props;
  const {COLORS, SIZES, FONTS} = theme;
  return (
    <LinkButton to={{screen: 'student-details', params: {id: student.id}}}>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOutUp}
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          gap: 12,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <Image
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: COLORS.placeholder,
          }}
          width={50}
          height={50}
          borderRadius={9999}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/000/350/111/original/vector-male-student-icon.jpg',
          }}
        />
        <View style={{gap: 3}}>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: COLORS.black,
              fontWeight: FONTS.medium,
            }}>
            {student.firstName} {student.lastName}
          </Text>
          <Text style={{color: COLORS.secondary, fontSize: SIZES.small}}>
            {student.phoneNumber && `+(961) ${student.phoneNumber}`}
          </Text>
        </View>
      </Animated.View>
    </LinkButton>
  );
});

export default StudentItem;
