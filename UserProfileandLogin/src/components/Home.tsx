import {View, BackHandler, ToastAndroid, Platform} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import userStore from '../mobx/Admin';
import {THome} from '../types';
import {useNavigationState} from '@react-navigation/native';
import {withObserverAndTheme} from './hoc';
import HomeEditProfileButton from './HomeEditProfileButton';
import HomeText from './HomeText';

const Home = ({navigation}: THome) => {
  const navIndex = useNavigationState(s => s.index);
  const [backPressCount, setBackPressCount] = useState(0);
  const handleBackPress = useCallback(() => {
    if (backPressCount === 0) {
      setBackPressCount(prevCount => prevCount + 1);
      setTimeout(() => setBackPressCount(0), 2000);
      ToastAndroid.show('Press one more time to exit', ToastAndroid.SHORT);
    } else if (backPressCount === 1) {
      BackHandler.exitApp();
    }
    return true;
  }, [backPressCount]);

  useEffect(() => {
    if (Platform.OS === 'android' && navIndex === 0) {
      const backListener = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress,
      );
      return backListener.remove;
    }
  }, [handleBackPress]);

  return (
    <View style={{flexDirection: 'column'}}>
      <HomeText username={userStore.user.username} />
      <HomeEditProfileButton navigation={navigation} />
    </View>
  );
};

export default withObserverAndTheme(Home);
