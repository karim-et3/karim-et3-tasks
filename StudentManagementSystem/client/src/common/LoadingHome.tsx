import {View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {WithThemeAndLiteObserver} from '../hoc/theme';
import courseStore from '../mobx/Course';
import studentStore from '../mobx/Student';
import subjectStore from '../mobx/Subject';

const LoadingHome = WithThemeAndLiteObserver<{}>(props => {
  const {theme} = props;
  const {COLORS} = theme;
  useEffect(() => {
    courseStore.fetchCourses();
    studentStore.fetchStudents();
    subjectStore.fetchSubjects();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={44} color={COLORS.primary} />
    </View>
  );
});

export default LoadingHome;
