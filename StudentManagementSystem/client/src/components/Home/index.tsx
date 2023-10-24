import {View} from 'react-native';
import React from 'react';
import CountBox from './CountBox';
import LoadingModal from '../../common/LoadingModal';
import studentStore from '../../mobx/Student';
import courseStore from '../../mobx/Course';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import subjectStore from '../../mobx/Subject';

const Home = () => {
  return (
    <>
      {courseStore.isLoading || studentStore.isLoading ? (
        <LoadingModal />
      ) : (
        <View
          style={{
            alignItems: 'center',
            marginTop: 120,
            flexDirection: 'row',
            justifyContent: 'center',
            columnGap: 16,
            rowGap: 8,
            marginHorizontal: 60,
            flexWrap: 'wrap',
          }}>
          <CountBox
            icon="users"
            count={studentStore.students.length}
            link={'students'}
          />
          <CountBox
            icon="table-list"
            count={courseStore.courses.length}
            link="courses"
          />
          <CountBox
            icon="folder-tree"
            count={subjectStore.subjects.length}
            link="subjects"
          />
        </View>
      )}
    </>
  );
};

export default WithThemeAndLiteObserver(Home);
