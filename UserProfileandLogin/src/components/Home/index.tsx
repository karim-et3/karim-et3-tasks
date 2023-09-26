import {View} from 'react-native';
import React, {useEffect} from 'react';
import userStore from '../../mobx/Admin';
import {THome} from '../../types';
import {withObserverAndTheme} from '../../hoc';
import HomeEditProfileButton from './HomeEditProfileButton';
import HomeText from './HomeText';
import globalStore from '../../mobx/Global';
import transaltionStore from '../../mobx/Translation';

const Home = ({navigation}: THome) => {
  useEffect(() => {
    globalStore.backPress(globalStore.handleBackPress);
  }, [globalStore.handleBackPress]);
  console.log(transaltionStore.get('profile'));
  return (
    <View style={{flexDirection: 'column'}}>
      <HomeText username={userStore.user.username} />
      <HomeEditProfileButton navigation={navigation} />
    </View>
  );
};

export default withObserverAndTheme(Home);
