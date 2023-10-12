import {View, Text} from 'react-native';
import React from 'react';
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Students from '../components/Students';
import Courses from '../components/Courses';
import Grades from '../components/Grades';
import Home from '../components/Home';
import {WithThemeAndLiteObserver} from '../hoc/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Drawer = createDrawerNavigator();
const RootDrawerNavigation = ({SIZES, COLORS}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <DrawerContentScrollView>
            <DrawerItemList {...props} />
            <DrawerItem
              label={'Students'}
              icon={() => (
                <FontAwesomeIcon
                  icon="users"
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
              onPress={() => props.navigation.navigate('students')}
            />
            <DrawerItem
              label={'Courses'}
              icon={() => (
                <FontAwesomeIcon
                  icon="folder-tree"
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
              onPress={() => props.navigation.navigate('courses')}
            />
            <DrawerItem
              label={'Grades'}
              icon={() => (
                <FontAwesomeIcon
                  icon="table-list"
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
              onPress={() => props.navigation.navigate('grades')}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name="home-drawer"
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: () => <FontAwesomeIcon icon={'home'} />,
        }}
      />
      <Drawer.Screen name="students" component={Students} />
      <Drawer.Screen name="courses" component={Courses} />
      <Drawer.Screen name="grades" component={Grades} />
    </Drawer.Navigator>
  );
};

export default WithThemeAndLiteObserver(RootDrawerNavigation);
