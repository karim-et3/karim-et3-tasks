import {View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import themeStore from '../../mobx/Theme';
import FetchError from './FetchError';
import ListNews from './ListNews';
import newsStore from '../../mobx/News';

const Home = () => {
  // const {data, isLoading, error} = useFetch('news');
  useEffect(() => {
    newsStore.fetchNews('usa');
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: themeStore.colors.white}}>
      {newsStore.isLoading ? (
        <ActivityIndicator
          style={{flex: 1}}
          color={themeStore.colors.primary}
          size={'large'}
        />
      ) : newsStore.getError ? (
        <FetchError />
      ) : (
        <ListNews />
      )}
    </View>
  );
};

export default observer(Home);
