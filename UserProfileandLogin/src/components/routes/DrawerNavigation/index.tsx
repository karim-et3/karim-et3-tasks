import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Logout from '../../Logout';
import RootTabNavigation from '../TabNavigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLORS} from '../../../constants';
import Login from '../../Login';
import adminStore from '../../../mobx/Admin';
import Test from '../Test';
import {observer} from 'mobx-react';

const Drawer = createDrawerNavigator();
const RootDrawerNavigation = () => {
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
              label={'logout'}
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
              title: 'Home',
              drawerIcon: props => (
                <FontAwesomeIcon icon="home" size={18} color={props.color} />
              ),
            }}
          />
          <Drawer.Screen
            name="delete-user"
            component={Test}
            options={{
              drawerLabel: 'Delete users',
              headerShown: false,
              swipeEdgeWidth: 0,
              drawerIcon: props => (
                <FontAwesomeIcon
                  icon="user-slash"
                  size={18}
                  color={props.color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="logout"
            component={Logout}
            options={{
              title: 'Logout',
              drawerIcon: props => (
                <FontAwesomeIcon
                  icon="right-from-bracket"
                  size={18}
                  color={props.color}
                />
              ),
            }}
          />
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
