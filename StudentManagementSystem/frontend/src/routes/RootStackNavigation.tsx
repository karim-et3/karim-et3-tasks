import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootDrawerNavigation from './RootDrawerNavigation';
import AddGrade from '../components/Grades/AddGrade';
import AddCourse from '../components/Courses/AddCourse';
import AddStudent from '../components/Students/AddStudent';
import {COLORS} from '../styles';
import StudentDetails from '../components/Students/StudentDetails';
import EditStudent from '../components/Students/EditStudent';
import Loading from '../common/Loading';
import AddSubject from '../components/Subjects/AddSubject';
import AddCourseToStudent from '../components/AddCoursesToStudent';

const Stack = createStackNavigator();
const RootStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={RootDrawerNavigation}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="add-student"
        component={AddStudent}
        options={{
          title: 'Add Student',
          cardStyle: {backgroundColor: 'white'},
          headerStyle: {backgroundColor: COLORS.primary},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen name="add-course" component={AddCourse} />
      <Stack.Screen name="add-subject" component={AddSubject} />
      <Stack.Screen
        name="add-course-to-student"
        options={{title: 'Student Courses'}}
        component={AddCourseToStudent}
      />
      <Stack.Screen name="add-grade" component={AddGrade} />
      <Stack.Screen
        name="student-details"
        component={StudentDetails}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: COLORS.primary},
          cardShadowEnabled: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="edit-student"
        component={EditStudent}
        options={{title: 'Edit Profile'}}
      />
      <Stack.Screen
        name="loading"
        component={Loading}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
