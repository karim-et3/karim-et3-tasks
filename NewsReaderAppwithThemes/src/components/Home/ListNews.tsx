import {ScrollView} from 'react-native';
import React from 'react';
import {Tnews} from '../../types';
import DisplaySingleNews from './DisplaySingleNews';
import {observer} from 'mobx-react-lite';
import newsStore from '../../mobx/News';

const ListNews = () => {
  return (
    <ScrollView>
      {newsStore.news.map((news: Tnews) => (
        <DisplaySingleNews news={news} key={news.publishedAt} />
      ))}
    </ScrollView>
  );
};

export default observer(ListNews);
