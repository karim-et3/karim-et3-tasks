import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Students from '../../components/Students';
import Courses from '../../components/Courses';
import Home from '../../components/Home';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';
import {Text} from 'react-native';
import Subjects from '../../components/Subjects';
import {RootDrawerParamList, RootStackNavigationProp} from '../../types';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

type Props = {navigation: RootStackNavigationProp};

const RootDrawerNavigation = WithThemeAndLiteObserver<Props>(props => {
  const {navigation, theme} = props;
  const {SIZES, FONTS, COLORS} = theme;
  return (
    <Drawer.Navigator
      initialRouteName="home-drawer"
      screenOptions={({navigation}) => {
        return {
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 12}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <FontAwesomeIcon icon="bars" color="white" size={20} />
            </TouchableOpacity>
          ),
          drawerActiveBackgroundColor: COLORS.primary,
          drawerActiveTintColor: COLORS.white,
          // drawerItemStyle: {backgroundColor: 'red'},
          // drawerStyle: {backgroundColor: 'black'},
          // headerTitleStyle: {backgroundColor: 'green'},
          drawerLabelStyle: {fontSize: SIZES.medium},
          headerTintColor: 'white',
          // drawerContentStyle: {backgroundColor: 'blue'},
          sceneContainerStyle: {backgroundColor: 'white'},
          drawerInactiveTintColor: COLORS.black,
          headerStyle: {backgroundColor: COLORS.primary},
        };
      }}>
      <Drawer.Screen
        name="home-drawer"
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: props => (
            <FontAwesomeIcon
              icon={'home'}
              color={props.focused ? COLORS.white : COLORS.black}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="students"
        component={Students}
        options={{
          title: 'Students',
          drawerIcon: props => (
            <FontAwesomeIcon
              icon="users"
              size={18}
              color={props.focused ? COLORS.white : COLORS.black}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('add-student')}
              style={{
                gap: 6,
                flexDirection: 'row',
                marginRight: 12,
                borderRadius: 8,
                padding: 8,
                paddingHorizontal: 12,
                backgroundColor: COLORS.white,
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: FONTS.medium, color: COLORS.primary}}>
                Add Student
              </Text>
              <FontAwesomeIcon icon="user-plus" color={COLORS.primary} />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="courses"
        component={Courses}
        options={{
          title: 'Courses',
          drawerIcon: props => (
            <FontAwesomeIcon
              icon="table-list"
              size={18}
              color={props.focused ? COLORS.white : COLORS.black}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('add-course')}
              style={{
                gap: 6,
                flexDirection: 'row',
                marginRight: 12,
                borderRadius: 8,
                padding: 8,
                paddingHorizontal: 12,
                backgroundColor: COLORS.white,
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: FONTS.medium, color: COLORS.primary}}>
                Add Course
              </Text>
              <FontAwesomeIcon icon="plus" color={COLORS.primary} />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="subjects"
        component={Subjects}
        options={{
          title: 'Subjects',
          drawerIcon: props => (
            <FontAwesomeIcon
              icon="folder-tree"
              size={18}
              color={props.focused ? COLORS.white : COLORS.black}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('add-subject')}
              style={{
                gap: 6,
                flexDirection: 'row',
                marginRight: 12,
                borderRadius: 8,
                padding: 8,
                paddingHorizontal: 12,
                backgroundColor: COLORS.white,
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: FONTS.medium, color: COLORS.primary}}>
                Add Subject
              </Text>
              <FontAwesomeIcon icon="plus" color={COLORS.primary} />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
});

export default RootDrawerNavigation;
