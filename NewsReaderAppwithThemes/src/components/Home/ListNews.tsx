import {FlatList} from 'react-native';
import React from 'react';
import DisplaySingleNews from './DisplaySingleNews';
import newsStore from '../../mobx/News';
import {withLiteObserver} from '../../hoc';

const ListNews = withLiteObserver(() => {
  return (
    <FlatList
      data={newsStore.getNews}
      renderItem={({item}) => <DisplaySingleNews news={item} />}
    />
  );
});

export default ListNews;
