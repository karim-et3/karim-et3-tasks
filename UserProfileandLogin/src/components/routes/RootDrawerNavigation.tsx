import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
// import AddUser from './AddUser';
import DeleteUser from '../DeleteUser';
import Logout from '../Logout';
import RootTabNavigation from './RootTabNavigation';

const Drawer = createDrawerNavigator();
const RootDrawerNavigation = () => {
  return (
    <Drawer.Navigator
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
      <Drawer.Screen
        name="home_tab"
        component={RootTabNavigation}
        options={{
          title: 'Home',
        }}
      />
      {/* <Drawer.Screen
        name="add-user"
        component={AddUser}
        options={{title: 'Add user'}}
      /> */}
      <Drawer.Screen
        name="delete-user"
        component={DeleteUser}
        options={{title: 'Delete users'}}
      />
      <Drawer.Screen
        name="logout"
        component={Logout}
        options={{title: 'Logout'}}
      />
    </Drawer.Navigator>
  );
};

export default RootDrawerNavigation;
