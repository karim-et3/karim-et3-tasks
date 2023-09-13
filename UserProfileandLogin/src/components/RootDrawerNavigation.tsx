import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
// import AddUser from './AddUser';
import Home from './Home';
import DeleteUser from './DeleteUser';

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
              onPress={() => props.navigation.navigate('delete-user')}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name="home"
        component={Home}
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
    </Drawer.Navigator>
  );
};

export default RootDrawerNavigation;
