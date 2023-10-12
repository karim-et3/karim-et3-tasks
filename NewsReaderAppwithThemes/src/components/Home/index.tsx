import {View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import FetchError from './FetchError';
import ListNews from './ListNews';
import {withLiteObserver} from '../../hoc';
import themeStore from '../../mobx/Theme';
import SearchBar from './SearchBar';
import searchtSore from '../../mobx/Search';
import NoResult from './NoResult';

const Home = () => {
  useEffect(() => {
    searchtSore.search('arab');
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: themeStore.white}}>
      <SearchBar />
      {searchtSore.isLoading ? (
        <ActivityIndicator
          style={{flex: 1}}
          color={themeStore.primary}
          size={'large'}
        />
      ) : searchtSore.getNoResults ? (
        <NoResult />
      ) : searchtSore.getError ? (
        <FetchError />
      ) : (
        <ListNews />
      )}
    </View>
  );
};

export default withLiteObserver(Home);
