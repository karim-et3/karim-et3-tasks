import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {CustomModal} from '../../../common';
import Seperator from '../../../common/Seperator';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import LoadingModal from '../../../common/LoadingModal';

type Props = {
  navigation: StackScreenProps<ParamListBase>;
  route: {params: {id: number}};
};
const StudentDetails = WithThemeAndLiteObserver<Props>(props => {
  const {navigation, route, theme} = props;
  const {COLORS, FONTS, SIZES, SHADOWS} = theme;
  const [modalVisible, setModalVisible] = useState(false);
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
                      '{studentStore.student.firstName}{' '}
                      {studentStore.student.lastName}'{' '}
                    </Text>
                  }
                  ?
                </Text>
              }
              buttonOneText="Cancel"
              buttonOneStyle={{
                backgroundColor: COLORS.grey,
                color: COLORS.white,
              }}
              buttonOneOnPress={() => setModalVisible(false)}
              buttonTwoText="Delete"
              buttonTwoStyle={{
                backgroundColor: COLORS.error,
                color: COLORS.white,
              }}
              buttonTwoOnPress={() => {
                setModalVisible(false);
                studentStore.deleteStudent(id);
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
              firstName={studentStore.student.firstName}
              lastName={studentStore.student.lastName}
            />
            <Seperator styles={{marginTop: SIZES.large}} />
            <StudentDetailsInfo />
            <Seperator />
            <ButtonsContainer
              id={id}
              navigation={navigation}
              setModalVisible={setModalVisible}
            />
          </Animated.View>
        </View>
      )}
    </>
  );
});

export default StudentDetails;
