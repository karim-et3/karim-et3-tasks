import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {TSubject} from '../../../types';
import subjectStore from '../../../mobx/Subject';
import {CustomModal} from '../../../common';
import {FONTS} from '../../../styles';
import {navigate} from '../../../routes/NavigationRef';

type Props = {
  subject: TSubject;
  index: number;
};
const SubjectItem = WithThemeAndLiteObserver<Props>(props => {
  const {subject, index, theme} = props;
  const {COLORS, SIZES} = theme;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {modalVisible && (
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
                Registered course: {subject.id}
              </Text>
            </View>
          }
          buttonOneText={'Cancel'}
          buttonOneStyle={{
            backgroundColor: COLORS.grey,
            color: COLORS.white,
          }}
          buttonOneOnPress={() => setModalVisible(false)}
          buttonTwoText={'Edit'}
          buttonTwoStyle={{
            backgroundColor: COLORS.green,
            color: COLORS.white,
          }}
          buttonTwoOnPress={() => {
            navigate('edit-subject', {id: subject.id});
            setModalVisible(false);
          }}
          setModalVisible={setModalVisible}
        />
      )}
      <Pressable style={{width: '100%'}} onPress={() => setModalVisible(true)}>
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
            <Text style={{}}> {subject.id}</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
});

export default SubjectItem;
