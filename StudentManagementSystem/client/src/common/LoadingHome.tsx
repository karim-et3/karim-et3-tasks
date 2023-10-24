import {View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {WithThemeAndLiteObserver} from '../hoc/theme';
import courseStore from '../mobx/Course';
import studentStore from '../mobx/Student';
import subjectStore from '../mobx/Subject';

type Props = {
  setIsAppReady: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoadingHome = WithThemeAndLiteObserver<Props>(props => {
  const {setIsAppReady, theme} = props;
  const {COLORS} = theme;
  useEffect(() => {
    courseStore.fetchCourses();
    studentStore.fetchStudents();
    subjectStore.fetchSubjects();
  }, []);
  useEffect(() => {
    if (
      !studentStore.isLoading &&
      !courseStore.isLoading &&
      !subjectStore.isLoading
    )
      setIsAppReady(true);
  }, [studentStore.isLoading, courseStore.isLoading, subjectStore.isLoading]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={44} color={COLORS.primary} />
    </View>
  );
});

export default LoadingHome;
