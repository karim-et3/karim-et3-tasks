import {View, Text} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';

const AddCourse = () => {
  return (
    <View>
      <Text>AddCourse</Text>
    </View>
  );
};

export default WithThemeAndLiteObserver(AddCourse);
