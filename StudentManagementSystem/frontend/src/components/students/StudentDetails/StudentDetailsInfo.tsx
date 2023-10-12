import {View} from 'react-native';
import React from 'react';
import studentDetailsStore from '../../../mobx/StudentDetails';
import StudentDetailsBox from './StudentDetailsInfoBox';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';

const StudentDetailsInfo = ({SIZES}) => {
  return (
    <View style={{gap: 10, margin: SIZES.large}}>
      <StudentDetailsBox icon="at" data={studentDetailsStore.student.email} />
      <StudentDetailsBox
        icon="phone"
        data={studentDetailsStore.student.phoneNumber}
      />
      <StudentDetailsBox
        icon="calendar"
        data={studentDetailsStore.student.dateOfBirth}
      />
      <StudentDetailsBox
        icon="location-dot"
        data={studentDetailsStore.student.address}
      />
    </View>
  );
};

export default WithThemeAndLiteObserver(StudentDetailsInfo);
