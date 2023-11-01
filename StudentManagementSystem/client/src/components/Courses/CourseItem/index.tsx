import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {RootStackNavigationProp, TCourses} from '../../../types';
import {CustomModal} from '../../../common';
import subjectStore from '../../../mobx/Subject';

type Props = {
  course: TCourses;
  navigation: RootStackNavigationProp;
};
const CourseItem = WithThemeAndLiteObserver<Props>(props => {
  const {course, navigation, theme} = props;
  const {SIZES, COLORS, FONTS} = theme;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getSubjectNamefromID = (id: number) => {
    const index = subjectStore.subjects.findIndex(sub => sub.id === id);
    const subject = subjectStore.subjects[index].name;
    return subject;
  };
  return (
    <>
      <TouchableOpacity onPress={() => setIsModalOpen(true)}>
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
      {isModalOpen && (
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
                  {getSubjectNamefromID(course.subjectID)}
                </Text>
              </Text>
              <Text style={{color: COLORS.black, fontSize: SIZES.large}}>
                Duration:{' '}
                <Text style={{color: COLORS.secondary, fontSize: SIZES.large}}>
                  {course.duration ? course.duration : 0}
                </Text>
              </Text>
            </View>
          }
          buttonOneText={'OK'}
          buttonOneStyle={{
            backgroundColor: COLORS.primary,
            color: COLORS.white,
          }}
          buttonOneOnPress={() => setIsModalOpen(false)}
          buttonTwoText={'Edit'}
          buttonTwoStyle={{
            backgroundColor: COLORS.green,
            color: COLORS.white,
          }}
          buttonTwoOnPress={() => {
            setIsModalOpen(false);
            navigation.navigate('edit-course', {id: course.id});
          }}
          setModalVisible={s => setIsModalOpen(s)}
        />
      )}
    </>
  );
});

export default CourseItem;
