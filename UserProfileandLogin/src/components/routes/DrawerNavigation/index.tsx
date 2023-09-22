import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import RootTabNavigation from '../TabNavigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLORS, SIZES} from '../../../constants';
import Login from '../../Login';
import adminStore from '../../../mobx/Admin';
import {observer} from 'mobx-react-lite';
import LanguageSwitch from './LanguageSwitch';
import {useTranslation} from 'react-i18next';

const Drawer = createDrawerNavigator();
const RootDrawerNavigation = () => {
  const {t} = useTranslation();
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
              label={t('deleter')}
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
              label={t('logout')}
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
      {adminStore.checkAuth() ? (
        <>
          <Drawer.Screen
            name="home-drawer"
            component={RootTabNavigation}
            options={{
              drawerLabelStyle: {fontSize: SIZES.medium, marginLeft: -10},
              title: t('home'),
              drawerIcon: props => (
                <FontAwesomeIcon icon="home" size={18} color={props.color} />
              ),
            }}
          />
          {/* <Drawer.Screen
            name="logout"
            component={Logout}
            options={
              {
                // title: 'Logout',
                // drawerIcon: props => (
                //   <FontAwesomeIcon
                //     icon="right-from-bracket"
                //     size={18}
                //     color={props.color}
                //   />
                // ),
              }
            }
          /> */}
        </>
      ) : (
        <Drawer.Screen
          name="login"
          component={Login}
          options={{headerShown: false, swipeEnabled: false, swipeEdgeWidth: 0}}
        />
      )}
    </Drawer.Navigator>
  );
};

export default observer(RootDrawerNavigation);
