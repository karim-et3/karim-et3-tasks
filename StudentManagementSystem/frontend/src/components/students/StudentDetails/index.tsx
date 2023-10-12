import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import Animated, {
  SlideInRight,
  SlideInUp,
  SlideOutLeft,
} from 'react-native-reanimated';
import studentDetailsStore from '../../../mobx/StudentDetails';
import {TStudentDetails} from '../../../types';
import Loading from '../../../common/Loading';
import studentStore from '../../../mobx/Students';
import ButtonsContainer from './ButtonsContainer';
import StudentDetailsInfo from './StudentDetailsInfo';
import StudentDetailsHeader from './StudentDetailsHeader';
import {CustomModal} from '../../../common';
import Seperator from '../../../common/Seperator';

const StudentDetails = ({
  navigation,
  route,
  COLORS,
  SIZES,
  FONTS,
  SHADOWS,
}: TStudentDetails) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const {id} = route.params;
    studentDetailsStore.fetchStudent(id);
  }, []);

  useEffect(() => {
    if (
      studentDetailsStore.student.firstName &&
      studentDetailsStore.student.lastName
    )
      navigation.setOptions({
        title: `${studentDetailsStore.student.firstName} ${studentDetailsStore.student.lastName}`,
      });
  }, [studentDetailsStore.student]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      {studentDetailsStore.student.id ? (
        <>
          {modalVisible && (
            <CustomModal
              setModalVisible={setModalVisible}
              title={
                <Text
                  style={{
                    color: COLORS.black,
                    fontWeight: FONTS.medium,
                    fontSize: SIZES.large,
                  }}>
                  Are you sure you want to delete{' '}
                  {
                    <Text style={{fontWeight: FONTS.bold}}>
                      '{studentDetailsStore.student.firstName}{' '}
                      {studentDetailsStore.student.lastName}'{' '}
                    </Text>
                  }
                  ?
                </Text>
              }
              onConfirm={() => {
                setModalVisible(false);
                studentStore.delete(studentDetailsStore.student.id);
              }}
            />
          )}
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
              firstName={studentDetailsStore.student.firstName}
              lastName={studentDetailsStore.student.lastName}
            />
            <Seperator styles={{marginTop: SIZES.large}} />
            <StudentDetailsInfo />
            <Seperator />
            <ButtonsContainer
              navigation={navigation}
              setModalVisible={setModalVisible}
            />
          </Animated.View>
        </>
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default WithThemeAndLiteObserver(StudentDetails);
