import {View} from 'react-native';
import React from 'react';
import courseStore from '../../../mobx/Course';
import {SelectList} from 'react-native-dropdown-select-list';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import subjectsStore from '../../../mobx/Subject';

type Props = {};
const SubjectSelectBox = WithThemeAndLiteObserver<Props>(props => {
  const {COLORS} = props.theme;
  return (
    <View style={{width: '100%'}}>
      <View onTouchStart={() => courseStore.setFocusSubject()}>
        <SelectList
          data={subjectsStore.subjects.map(sub => sub.name)}
          setSelected={(subName: string) => courseStore.setTempSubject(subName)}
          boxStyles={{
            borderColor: courseStore.getFocusSubject
              ? COLORS.primary
              : COLORS.grey,
          }}
          placeholder="Subject *"
          search={false}
          maxHeight={100}
          dropdownStyles={{
            backgroundColor: COLORS.slate,
            borderColor: courseStore.getFocusSubject
              ? COLORS.primary
              : COLORS.grey,
          }}
        />
      </View>
    </View>
  );
});

export default SubjectSelectBox;
