import {View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import courseStore from '../../../mobx/Course';
import {SelectList} from 'react-native-dropdown-select-list';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';

type Props = {};
const SubjectSelectBox = WithThemeAndLiteObserver<Props>(props => {
  const {COLORS} = props.theme;
  return (
    <View style={{width: '90%'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          courseStore.setFocusSubject();
          console.log(courseStore.getFocusSubject);
        }}>
        <SelectList
          data={['test', 'test', 'test']}
          setSelected={(sub: string) => courseStore.setSubject(sub)}
          boxStyles={{
            borderColor: courseStore.getFocusSubject
              ? COLORS.primary
              : COLORS.grey,
          }}
          placeholder="Subject"
          dropdownStyles={{
            borderColor: courseStore.getFocusSubject
              ? COLORS.primary
              : COLORS.grey,
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
});

export default SubjectSelectBox;
