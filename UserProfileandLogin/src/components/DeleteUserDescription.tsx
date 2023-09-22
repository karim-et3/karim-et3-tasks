import {View, Text} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from './hoc';
import {TDeleteUserDescription} from '../types';

const DeleteUserDescription = ({
  COLORS,
  FONTS,
  SIZES,
  user,
}: TDeleteUserDescription) => {
  return (
    <View>
      <Text
        style={{
          color: COLORS.test_primary3,
          fontWeight: FONTS.bold,
          fontSize: SIZES.medium,
        }}>
        {user.firstName} {user.lastName}
      </Text>
      <Text
        style={{
          color: COLORS.test_primary3,
          fontWeight: FONTS.medium,
          marginTop: 5,
        }}>
        {user.dob.toLocaleDateString()}
      </Text>
    </View>
  );
};

export default withObserverAndTheme(DeleteUserDescription);
