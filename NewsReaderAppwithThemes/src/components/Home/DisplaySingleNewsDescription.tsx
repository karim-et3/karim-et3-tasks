import {View, Text} from 'react-native';
import React from 'react';
import themeStore from '../../mobx/Theme';
import {observer} from 'mobx-react-lite';
import sizesStore from '../../mobx/Sizes';
import {TDisplaySingleNewsDescription} from '../../types';

const DisplaySingleNewsDescription = ({
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
        style={{
          fontSize: sizesStore.medium,
          flexShrink: 1,
          color: themeStore.colors.black,
        }}>
        {news.title}
      </Text>
      <Text
        style={{
          fontSize: sizesStore.medium,
          color: themeStore.colors.grey,
        }}>
        {new Date(news.publishedAt).toLocaleTimeString()}
      </Text>
    </View>
  );
};

export default observer(DisplaySingleNewsDescription);
