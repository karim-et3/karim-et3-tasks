import {View, Button} from 'react-native';
import React, {useEffect} from 'react';
import InputText from '../common/InputText';
import {TEditProfile} from '../../types';
import {withObserverAndTheme} from '../../hoc';
import translationStore from '../../mobx/Translation';
import adminStore from '../../mobx/Admin';
import globalStore from '../../mobx/Global';
import {useNavigationState} from '@react-navigation/native';

const EditProfile = ({COLORS, navigation}: TEditProfile) => {
  const navIndex = useNavigationState(s => s.index) + 1;
  function updateUser() {
    adminStore.update();
    navigation.navigate('home-stack');
  }
  useEffect(() => {
    globalStore.backPress(globalStore.unsaveChanges, navIndex);
  }, [globalStore.unsaveChanges]);

  useEffect(() => {
    return () => {
      adminStore.resetInput();
    };
  }, []);
  return (
    <View style={{gap: 15, marginHorizontal: 20, marginTop: 25}}>
      <InputText
        value={adminStore.tempUsername}
        setValue={e => adminStore.setTempUsername(e)}
        icon="user"
        placeholder="your username"
      />
      <InputText
        value={adminStore.tempPhone}
        setValue={e => adminStore.setTempPhone(e)}
        icon="phone"
        type="phone"
        placeholder="your phone"
      />
      <InputText
        value={adminStore.tempAge}
        setValue={e => adminStore.setTempAge(e)}
        icon="image-portrait"
        type="age"
        placeholder="your age"
      />
      <InputText
        value={adminStore.tempAddress}
        setValue={e => adminStore.setTempAddress(e)}
        icon="location-dot"
        placeholder="your address"
      />
      <View style={{marginTop: 12}}>
        <Button
          title={translationStore.get('submit')}
          color={COLORS.primary}
          onPress={updateUser}
        />
      </View>
    </View>
  );
};

export default withObserverAndTheme(EditProfile);
