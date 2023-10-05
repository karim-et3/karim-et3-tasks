import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Students from '../components/students';
import Courses from '../components/courses';
import Grades from '../components/grades';

const Drawer = createDrawerNavigator();
const RootDrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="students" component={Students} />
      <Drawer.Screen name="courses" component={Courses} />
      <Drawer.Screen name="grades" component={Grades} />
    </Drawer.Navigator>
  );
};

export default RootDrawerNavigation;
