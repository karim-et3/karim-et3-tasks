import {ScrollView} from 'react-native';
import React from 'react';
import {Tnews} from '../../types';
import DisplaySingleNews from './DisplaySingleNews';
import {observer} from 'mobx-react-lite';

const ListNews = ({data}: {data: Tnews[]}) => {
  return (
    <ScrollView>
      {data.map((news: Tnews) => (
        <DisplaySingleNews news={news} key={news.publishedAt} />
      ))}
    </ScrollView>
  );
};

export default observer(ListNews);
