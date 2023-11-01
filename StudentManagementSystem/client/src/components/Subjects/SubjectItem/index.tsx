import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {TSubject} from '../../../types';
import subjectStore from '../../../mobx/Subject';
import {CustomModal} from '../../../common';
import {navigate} from '../../../routes/navigationRef';
import courseStore from '../../../mobx/Course';

type Props = {
  subject: TSubject & {id: number};
  index: number;
};
const SubjectItem = WithThemeAndLiteObserver<Props>(props => {
  const {subject, index, theme} = props;
  const {COLORS, FONTS, SIZES} = theme;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <CustomModal
          title={
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: SIZES.large,
                  fontWeight: FONTS.medium,
                }}>
                {subject.name}
              </Text>
              <Text style={{marginTop: SIZES.small, fontSize: SIZES.medium}}>
                Registered course:{' '}
                {
                  courseStore.getCourses.filter(c => c.subjectID === subject.id)
                    .length
                }
              </Text>
            </View>
          }
          buttonOneText={'Cancel'}
          buttonOneStyle={{
            backgroundColor: COLORS.grey,
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
            navigate('edit-subject', {id: subject.id});
          }}
          setModalVisible={s => setIsModalOpen(s)}
        />
      )}
      <Pressable
        style={{
          width: '100%',
          backgroundColor: index % 2 === 0 ? 'white' : '#f8fafc',
        }}
        onPress={() => setIsModalOpen(true)}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
          <View
            style={{
              padding: 8,
              borderBottomWidth:
                index + 1 !== subjectStore.subjects.length ? 0 : 1,
              borderWidth: 1,
              borderColor: COLORS.primary,
              width: '55%',
              borderRightWidth: 0,
            }}>
            <Text style={{}}>{subject.name}</Text>
          </View>
          <View
            style={{
              padding: 8,
              borderBottomWidth:
                index + 1 !== subjectStore.subjects.length ? 0 : 1,
              borderWidth: 1,
              borderColor: COLORS.primary,
              width: '30%',
            }}>
            <Text style={{}}>
              {
                courseStore.getCourses.filter(c => c.subjectID === subject.id)
                  .length
              }
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
});

export default SubjectItem;
