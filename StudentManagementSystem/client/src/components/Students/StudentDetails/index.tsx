import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import Animated, {
  SlideInRight,
  SlideInUp,
  SlideOutLeft,
} from 'react-native-reanimated';
import studentStore from '../../../mobx/Student';
import ButtonsContainer from './ButtonsContainer';
import StudentDetailsInfo from './StudentDetailsInfo';
import StudentDetailsHeader from './StudentDetailsHeader';
import {Seperator} from '../../../common';
import {LoadingModal} from '../../../common';
import {RootStackNavigationProp} from '../../../types';

type Props = {
  navigation: RootStackNavigationProp;
  route: {params: {id: number}};
};
const StudentDetails = WithThemeAndLiteObserver<Props>(props => {
  const {navigation, route, theme} = props;
  const {COLORS, SHADOWS} = theme;
  const {id} = route.params;
  useEffect(() => {
    if (id) studentStore.fetchStudent(id);
  }, [id]);

  useEffect(() => {
    if (studentStore.student.firstName && studentStore.student.lastName)
      navigation.setOptions({
        title: `${studentStore.student.firstName} ${studentStore.student.lastName}`,
      });
  }, [studentStore.student]);

  return (
    <>
      {studentStore.isLoading ? (
        <LoadingModal />
      ) : (
        <View
          style={{
            flex: 1,
          }}>
          <Animated.View
            entering={SlideInUp}
            style={{
              top: 0,
              height: '24%',
              backgroundColor: COLORS.primary,
              borderBottomRightRadius: 60,
              borderBottomLeftRadius: 60,
            }}
          />
          <Animated.View
            entering={SlideInRight}
            exiting={SlideOutLeft}
            style={[
              SHADOWS.medium,
              {
                marginTop: 50,
                justifyContent: 'center',
                alignSelf: 'center',
                position: 'absolute',
                width: '90%',
                borderRadius: 20,
                padding: 20,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: COLORS.grey,
                backgroundColor: COLORS.white,
              },
            ]}>
            <StudentDetailsHeader
              firstName={studentStore.student.firstName}
              lastName={studentStore.student.lastName}
            />
            <StudentDetailsInfo />
            <Seperator />
            <ButtonsContainer id={id} navigation={navigation} />
          </Animated.View>
        </View>
      )}
    </>
  );
});

export default StudentDetails;
