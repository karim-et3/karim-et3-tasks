import {View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import FetchError from './FetchError';
import ListNews from './ListNews';
import newsStore from '../../mobx/News';
import {WithThemeAndLiteObserver} from '../hoc';

const Home = ({COLORS}) => {
  useEffect(() => {
    newsStore.fetchNews('usa');
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {newsStore.isLoading ? (
        <ActivityIndicator
          style={{flex: 1}}
          color={COLORS.primary}
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

export default WithThemeAndLiteObserver(Home);
