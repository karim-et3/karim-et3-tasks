import {View} from 'react-native';
import React from 'react';
import {TDisplaySingleNews} from '../../types';
import {observer} from 'mobx-react-lite';
import DisplaySingleNewsDescription from './DisplaySingleNewsDescription';
import DisplaySingleNewsImage from './DisplaySingleNewsImage';

const DisplaySingleNews = ({news}: TDisplaySingleNews) => {
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
};

export default observer(DisplaySingleNews);
