import {View, FlatList} from 'react-native';
import React from 'react';
import courseStore from '../../mobx/Course';
import CourseItem from './CourseItem';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import {LoadingModal} from '../../common';
import {EmptyList} from '../../common';
import {RootStackNavigationProp} from '../../types';

type Props = {
  navigation: RootStackNavigationProp;
};
const Courses = WithThemeAndLiteObserver<Props>(props => {
  const {navigation} = props;
  const {SIZES} = props.theme;

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
            ListEmptyComponent={<EmptyList text="No Courses." />}
            extraData={courseStore.getRefresh}
          />
        </View>
      )}
    </>
  );
});

export default Courses;
