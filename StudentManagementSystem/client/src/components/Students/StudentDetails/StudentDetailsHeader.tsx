import {View, Text, Image} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';

type Props = {
  firstName: string;
  lastName: string;
};
const StudentDetailsHeader = WithThemeAndLiteObserver<Props>(props => {
  const {firstName, lastName, theme} = props;
  const {COLORS, FONTS, SIZES} = theme;
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
});

export default StudentDetailsHeader;
