import {View, Text, Image} from 'react-native';
import React from 'react';
import studentDetailsStore from '../../../mobx/StudentDetails';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';

const StudentDetailsHeader = ({firstName, lastName, COLORS, FONTS, SIZES}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        gap: 20,
      }}>
      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/000/350/111/original/vector-male-student-icon.jpg',
        }}
        style={{width: 120, height: 120, borderRadius: 100}}
      />
      <Text
        style={{
          fontSize: SIZES.xLarge,
          fontWeight: FONTS.bold,
          color: COLORS.black,
        }}>
        {firstName} {lastName}
      </Text>
    </View>
  );
};

export default WithThemeAndLiteObserver(StudentDetailsHeader);
