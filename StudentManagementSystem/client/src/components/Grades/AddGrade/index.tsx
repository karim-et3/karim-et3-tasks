import {View, Text} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';

const AddGrade = WithThemeAndLiteObserver<{}>(() => {
  return (
    <View>
      <Text>AddGrade</Text>
    </View>
  );
});

export default AddGrade;
