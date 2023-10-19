import {View} from 'react-native';
import React from 'react';
import studentStore from '../../../mobx/Student';
import StudentDetailsBox from './StudentDetailsInfoBox';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';

type Props = {};

const StudentDetailsInfo = WithThemeAndLiteObserver<Props>(props => {
  const {theme} = props;
  const {SIZES} = theme;
  return (
    <View style={{gap: 10, margin: SIZES.large}}>
      <StudentDetailsBox icon="at" data={studentStore.student.email} />
      <StudentDetailsBox icon="phone" data={studentStore.student.phoneNumber} />
      <StudentDetailsBox
        icon="calendar"
        data={new Date(studentStore.student.dateOfBirth).toLocaleDateString()}
      />
      <StudentDetailsBox
        icon="location-dot"
        data={studentStore.student.address}
      />
    </View>
  );
});

export default StudentDetailsInfo;
