import {View, Image} from 'react-native';
import React from 'react';
import {TDisplaySingleNews} from '../../types';
import {observer} from 'mobx-react-lite';
import DisplaySingleNewsDescription from './DisplaySingleNewsDescription';

const DisplaySingleNews = ({news}: TDisplaySingleNews) => {
  return (
    <View style={{flexDirection: 'row', borderBottomWidth: 1.5}}>
      <Image
        source={{uri: news.urlToImage}}
        style={{width: 100, height: 100}}
      />
      <DisplaySingleNewsDescription news={news} />
    </View>
  );
};

export default observer(DisplaySingleNews);
