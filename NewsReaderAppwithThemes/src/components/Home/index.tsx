import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import useFetch from '../../hook/useFetch';
import {observer} from 'mobx-react-lite';
import themeStore from '../../mobx/Theme';
import FetchError from './FetchError';
import ListNews from './ListNews';

const Home = () => {
  const {data, isLoading, error} = useFetch('news');
  return (
    <View style={{flex: 1, backgroundColor: themeStore.colors.white}}>
      {isLoading ? (
        <ActivityIndicator
          style={{flex: 1}}
          color={themeStore.colors.primary}
          size={'large'}
        />
      ) : error ? (
        <FetchError />
      ) : (
        <ListNews data={data} />
      )}
    </View>
  );
};

export default observer(Home);
