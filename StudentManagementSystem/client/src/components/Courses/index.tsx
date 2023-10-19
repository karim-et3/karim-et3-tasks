import {View, FlatList} from 'react-native';
import React from 'react';
import courseStore from '../../mobx/Course';
import CourseItem from './CourseItem';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import LoadingModal from '../../common/LoadingModal';

type Props = {
  navigation: StackScreenProps<ParamListBase>;
};
const Courses = WithThemeAndLiteObserver<Props>(props => {
  const {navigation} = props;
  const {SIZES} = props.theme;
  // useEffect(() => {
  //   courseStore.fetchCourses();
  // }, [courseStore.getCourses]);

  return (
    <>
      {courseStore.isLoading ? (
        <LoadingModal />
      ) : (
        <View style={{margin: SIZES.xxLarge}}>
          <FlatList
            columnWrapperStyle={{
              justifyContent: 'center',
              gap: 14,
            }}
            contentContainerStyle={{gap: 8}}
            data={courseStore.getCourses}
            renderItem={item => (
              <CourseItem navigation={navigation} course={item.item} />
            )}
            numColumns={2}
          />
        </View>
      )}
    </>
  );
});

export default Courses;
