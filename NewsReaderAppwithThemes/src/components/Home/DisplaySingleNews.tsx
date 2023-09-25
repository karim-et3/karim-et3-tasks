import {View, Text, Image} from 'react-native';
import React from 'react';
import {Tnews} from '../../types';
import themeStore from '../../mobx/Theme';
import {SIZES} from '../../styles';

const DisplaySingleNews = ({news}: {news: Tnews}) => {
  return (
    <View style={{flexDirection: 'row', borderBottomWidth: 1.5}}>
      <Image
        source={{uri: news.urlToImage}}
        style={{width: 100, height: 100}}
      />
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
            fontSize: SIZES.medium,
            flexShrink: 1,
            color: themeStore.colors.black,
          }}>
          {news.title}
        </Text>
        <Text
          style={{
            fontSize: SIZES.medium,
            color: themeStore.colors.grey,
          }}>
          {new Date(news.publishedAt).toLocaleTimeString()}
        </Text>
      </View>
    </View>
  );
};

export default DisplaySingleNews;
