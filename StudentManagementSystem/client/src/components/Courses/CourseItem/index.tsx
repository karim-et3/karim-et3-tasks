import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {TCourses} from '../../../types';
import {CustomModal} from '../../../common';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

type Props = {
  course: TCourses;
  navigation: StackScreenProps<ParamListBase>;
};
const CourseItem = WithThemeAndLiteObserver<Props>(props => {
  const {course, navigation, theme} = props;
  const {SIZES, COLORS, FONTS} = theme;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View
          style={[
            {
              width: 130,
              height: 100,
              borderWidth: 1,
              borderRadius: 6,
              borderColor: COLORS.primary,
              backgroundColor: COLORS.slate,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text
            style={{
              color: '#a1a1aa',
              fontSize: SIZES.large,
              fontWeight: FONTS.bold,
            }}>
            {course.code}
          </Text>
        </View>
      </TouchableOpacity>
      {modalVisible && (
        <CustomModal
          title={
            <View style={{gap: 3}}>
              <Text style={{color: COLORS.black, fontSize: SIZES.large}}>
                Code:{' '}
                <Text style={{color: COLORS.secondary, fontSize: SIZES.large}}>
                  {course.code}
                </Text>
              </Text>
              <Text style={{color: COLORS.black, fontSize: SIZES.large}}>
                Subject:{' '}
                <Text style={{color: COLORS.secondary, fontSize: SIZES.large}}>
                  {course.subject}
                </Text>
              </Text>
              <Text style={{color: COLORS.black, fontSize: SIZES.large}}>
                Duration:{' '}
                <Text style={{color: COLORS.secondary, fontSize: SIZES.large}}>
                  {course.duration}
                </Text>
              </Text>
            </View>
          }
          buttonOneText={'OK'}
          buttonOneStyle={{
            backgroundColor: COLORS.primary,
            color: COLORS.white,
          }}
          buttonOneOnPress={() => setModalVisible(false)}
          buttonTwoText={'Edit'}
          buttonTwoStyle={{
            backgroundColor: COLORS.green,
            color: COLORS.white,
          }}
          buttonTwoOnPress={() => {
            navigation.navigate('edit-course', {id: course.id});
            setModalVisible(false);
          }}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  );
});

export default CourseItem;
