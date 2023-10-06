import {View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import FetchError from './FetchError';
import ListNews from './ListNews';
import newsStore from '../../mobx/News';
import {withLiteObserver} from '../hoc';
import themeStore from '../../mobx/Theme';

const Home = () => {
  useEffect(() => {
    newsStore.fetchNews('usa');
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: themeStore.white}}>
      {/* {console.warn(
        'isLight props:',
        isLight,
        'isLight themeStore:',
        themeStore.isLight,
      )} */}
      {newsStore.isLoading ? (
        <ActivityIndicator
          style={{flex: 1}}
          color={themeStore.primary}
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

export default withLiteObserver(Home);
