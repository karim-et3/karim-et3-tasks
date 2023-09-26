import {View, Text} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from '../../hoc';
import translationStore from '../../mobx/Translation';

const NoUsers = ({COLORS, SIZES, FONTS}) => {
  return (
    <View
      style={{
        marginTop: 250,
        alignSelf: 'center',
      }}>
      <Text
        style={{
          color: COLORS.test_primary3,
          fontSize: SIZES.large,
          fontWeight: FONTS.bold,
        }}>
        {translationStore.get('no users.')}
      </Text>
    </View>
  );
};

export default withObserverAndTheme(NoUsers);
