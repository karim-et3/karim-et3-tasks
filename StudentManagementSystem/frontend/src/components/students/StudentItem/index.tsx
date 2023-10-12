import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {TStudentProps} from '../../../types';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import LinkButton from '../../../common/LinkButton';
import Animated, {FadeIn, SlideOutRight} from 'react-native-reanimated';

const StudentItem = ({COLORS, SIZES, FONTS, student}: TStudentProps) => {
  return (
    <LinkButton to={{screen: 'student-details', params: {id: student.id}}}>
      <Animated.View
        entering={FadeIn}
        exiting={SlideOutRight}
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
            {student.first_name} {student.last_name}
          </Text>
          <Text style={{color: COLORS.secondary, fontSize: SIZES.small}}>
            {student.phone_number && `+(961) ${student.phone_number}`}
          </Text>
        </View>
      </Animated.View>
    </LinkButton>
  );
};

export default WithThemeAndLiteObserver(StudentItem);
