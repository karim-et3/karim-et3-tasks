import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootDrawerNavigation from '../RootDrawerNavigation';
import AddCourse from '../../components/Courses/AddCourse';
import AddStudent from '../../components/Students/AddStudent';
import StudentDetails from '../../components/Students/StudentDetails';
import EditStudent from '../../components/Students/EditStudent';
import AddSubject from '../../components/Subjects/AddSubject';
import AddCourseToStudent from '../../components/Students/AddCoursesToStudent';
import EditCourse from '../../components/Courses/EditCourse';
import EditSubject from '../../components/Subjects/EditSubject';
import Grades from '../../components/Grades';
import {RootStackParamList} from '../../types';
import {WithThemeAndLiteObserver} from '../../hoc/theme';

const Stack = createStackNavigator<RootStackParamList>();
const RootStackNavigation = WithThemeAndLiteObserver(props => {
  const {COLORS} = props.theme;
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: 'white'},
        headerStyle: {backgroundColor: COLORS.primary},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="home"
        component={RootDrawerNavigation}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="add-student"
        component={AddStudent}
        options={{title: 'Add Student'}}
      />
      <Stack.Screen
        name="add-course"
        component={AddCourse}
        options={{title: 'Add Course'}}
      />
      <Stack.Screen
        name="add-subject"
        component={AddSubject}
        options={{title: 'Add Subject'}}
      />
      <Stack.Screen
        name="add-course-to-student"
        options={{title: 'Student Courses'}}
        component={AddCourseToStudent}
      />
      <Stack.Screen
        name="grades"
        component={Grades}
        options={{
          title: 'Grades',
        }}
      />
      <Stack.Screen
        name="student-details"
        component={StudentDetails}
        options={{
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
        name="edit-course"
        component={EditCourse}
        options={{title: 'Edit Course'}}
      />
      <Stack.Screen
        name="edit-subject"
        component={EditSubject}
        options={{title: 'Edit Subject'}}
      />
    </Stack.Navigator>
  );
});

export default RootStackNavigation;
