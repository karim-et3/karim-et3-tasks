import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import RootTabNavigation from '../TabNavigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import LanguageSwitch from './LanguageSwitch';
import {withObserverAndTheme} from '../../hoc';
import {TRootDrawerNavigation} from '../../types';
import translationStore from '../../mobx/Translation';

const Drawer = createDrawerNavigator();
const RootDrawerNavigation = ({COLORS, SIZES}: TRootDrawerNavigation) => {
  return (
    <Drawer.Navigator
      initialRouteName="home-drawer"
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.primary,
        drawerInactiveTintColor: COLORS.test_primary3,
        drawerActiveTintColor: COLORS.white,
        drawerType: 'slide',
        swipeEnabled: true,
        drawerContentContainerStyle: {backgroundColor: 'red'},
        drawerLabelStyle: {marginLeft: -10},
        swipeEdgeWidth: 100,
        headerShadowVisible: true,
      }}
      drawerContent={props => {
        return (
          <DrawerContentScrollView>
            <DrawerItemList {...props} />
            <DrawerItem
              label={translationStore.get('deleter')}
              icon={() => (
                <FontAwesomeIcon
                  icon="user-slash"
                  size={18}
                  color={COLORS.test_primary3}
                />
              )}
              inactiveTintColor={COLORS.test_primary3}
              labelStyle={{
                marginLeft: -10,
                color: COLORS.test_primary3,
                fontSize: SIZES.medium,
              }}
              onPress={() => props.navigation.navigate('delete-user')}
            />
            <LanguageSwitch />
            <DrawerItem
              label={translationStore.get('logout')}
              icon={() => (
                <FontAwesomeIcon
                  icon="right-from-bracket"
                  size={18}
                  color={COLORS.test_primary3}
                />
              )}
              inactiveTintColor={COLORS.test_primary3}
              labelStyle={{
                marginLeft: -10,
                color: COLORS.test_primary3,
                fontSize: SIZES.medium,
              }}
              onPress={() => props.navigation.navigate('logout')}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name="home-drawer"
        component={RootTabNavigation}
        options={{
          drawerLabelStyle: {fontSize: SIZES.medium, marginLeft: -10},
          title: translationStore.get('home'),
          drawerIcon: props => (
            <FontAwesomeIcon icon="home" size={18} color={props.color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default withObserverAndTheme(RootDrawerNavigation);
