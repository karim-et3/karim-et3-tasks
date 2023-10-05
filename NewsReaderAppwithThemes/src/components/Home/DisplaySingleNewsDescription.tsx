import {View, Text} from 'react-native';
import React from 'react';
import {TDisplaySingleNewsDescription} from '../../types';
import {WithThemeAndLiteObserver} from '../hoc';

const DisplaySingleNewsDescription = ({
  SIZES,
  COLORS,
  news,
}: TDisplaySingleNewsDescription) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 8,
        paddingVertical: 3,
      }}>
      <Text
        numberOfLines={3}
        style={{
          fontSize: SIZES.medium,
          flexShrink: 1,
          color: COLORS.black,
        }}>
        {news.title}
      </Text>
      <Text
        style={{
          fontSize: SIZES.medium,
          color: COLORS.grey,
        }}>
        {new Date(news.publishedAt).toLocaleTimeString()}
      </Text>
    </View>
  );
};

export default WithThemeAndLiteObserver(DisplaySingleNewsDescription);
