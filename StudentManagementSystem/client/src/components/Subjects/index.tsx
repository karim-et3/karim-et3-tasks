import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import SubjectItem from './SubjectItem';
import subjectStore from '../../mobx/Subject';
import EmptyList from '../EmptyList';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import LoadingModal from '../../common/LoadingModal';

const Subjects = WithThemeAndLiteObserver<{}>(props => {
  const {SIZES, COLORS, FONTS} = props.theme;
  return (
    <View>
      {subjectStore.isLoading ? (
        <LoadingModal />
      ) : (
        <View
          style={{
            margin: SIZES.xxLarge,
            alignItems: 'center',
          }}>
          <FlatList
            style={{width: '100%'}}
            ListHeaderComponent={
              subjectStore.subjects.length ? (
                <View
                  style={{flexDirection: 'row', backgroundColor: COLORS.white}}>
                  <View
                    style={{
                      padding: 5,
                      borderWidth: 1,
                      borderColor: COLORS.primary,
                      width: '55%',
                      borderBottomWidth: 0,
                      borderRightWidth: 0,
                    }}>
                    <Text
                      style={{
                        fontSize: SIZES.medium,
                        fontWeight: FONTS.medium,
                      }}>
                      Subject ID
                    </Text>
                  </View>
                  <View
                    style={{
                      padding: 8,
                      borderWidth: 1,
                      borderBottomWidth: 0,
                      borderColor: COLORS.primary,
                      width: '30%',
                    }}>
                    <Text
                      style={{
                        fontSize: SIZES.medium,
                        fontWeight: FONTS.medium,
                      }}>
                      Courses
                    </Text>
                  </View>
                </View>
              ) : (
                <></>
              )
            }
            data={subjectStore.subjects}
            contentContainerStyle={{
              alignItems: 'center',
            }}
            ListHeaderComponentStyle={{alignItems: 'center'}}
            renderItem={item => (
              <SubjectItem index={item.index} subject={item.item} />
            )}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={<EmptyList text="No Subjects." />}
          />
        </View>
      )}
    </View>
  );
});

export default Subjects;
