import {View} from 'react-native';
import React from 'react';
import {TDisplaySingleNews} from '../../../types';
import DisplaySingleNewsDescription from './DisplaySingleNewsDescription';
import DisplaySingleNewsImage from './DisplaySingleNewsImage';
import {withLiteObserver} from '../../../hoc';

const DisplaySingleNews = withLiteObserver(({news}: TDisplaySingleNews) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1.5,
      }}>
      <DisplaySingleNewsImage imageURL={news.urlToImage} />
      <DisplaySingleNewsDescription news={news} />
    </View>
  );
});

export default DisplaySingleNews;
