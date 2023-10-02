import {FlatList} from 'react-native';
import React from 'react';
import DisplaySingleNews from './DisplaySingleNews';
import {observer} from 'mobx-react-lite';
import newsStore from '../../mobx/News';

const ListNews = () => {
  return (
    <FlatList
      data={newsStore.getNews}
      renderItem={({item}) => <DisplaySingleNews news={item} />}
    />
  );
};

export default observer(ListNews);
