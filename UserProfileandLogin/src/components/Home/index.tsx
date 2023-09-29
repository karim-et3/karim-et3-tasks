import {View} from 'react-native';
import React, {useEffect} from 'react';
import userStore from '../../mobx/Admin';
import {THome} from '../../types';
import {withObserverAndTheme} from '../../hoc';
import HomeEditProfileButton from './HomeEditProfileButton';
import HomeText from './HomeText';
import globalStore from '../../mobx/Global';
import {useNavigationState} from '@react-navigation/native';

const Home = ({navigation}: THome) => {
  const navIndex = useNavigationState(s => s.index) - 1;
  useEffect(() => {
    globalStore.backPress(globalStore.doubleTaptoExitApp, navIndex);
  }, [globalStore.doubleTaptoExitApp]);

  return (
    <View style={{flexDirection: 'column'}}>
      <HomeText username={userStore.user.username} />
      <HomeEditProfileButton navigation={navigation} />
    </View>
  );
};

export default withObserverAndTheme(Home);
