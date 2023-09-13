import {
  View,
  Text,
  BackHandler,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import userStore from '../mobx/Admin';
import {colors} from '../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Tnavigation} from '../types';
import {observer} from 'mobx-react';
import {useNavigationState} from '@react-navigation/native';
const Home = observer(({navigation}: Tnavigation) => {
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
      <Text
        style={{
          fontSize: 28,
          color: colors.black,
          textAlign: 'center',
          marginTop: 100,
          fontWeight: '500',
        }}>
        Welcome{' '}
        <Text style={{fontSize: 33, fontWeight: '600'}}>
          {userStore.user.username}.
        </Text>
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          gap: 6,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.primary,
          paddingHorizontal: 16,
          borderRadius: 12,
          marginTop: 20,
          paddingVertical: 10,
          marginHorizontal: 135,
        }}
        onPress={() => navigation.navigate('edit')}>
        <Text style={{color: colors.white}}>Edit profile</Text>
        <FontAwesome5 color={colors.white} style={{}} name="user-edit" />
      </TouchableOpacity>
    </View>
  );
});

export default Home;
