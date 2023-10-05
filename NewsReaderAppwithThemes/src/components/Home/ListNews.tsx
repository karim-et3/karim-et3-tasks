import {FlatList} from 'react-native';
import React from 'react';
import DisplaySingleNews from './DisplaySingleNews';
import newsStore from '../../mobx/News';
import {withLiteObserver} from '../hoc';

const ListNews = () => {
  return (
    <FlatList
      data={newsStore.getNews}
      renderItem={({item}) => <DisplaySingleNews news={item} />}
    />
  );
};

export default withLiteObserver(ListNews);
