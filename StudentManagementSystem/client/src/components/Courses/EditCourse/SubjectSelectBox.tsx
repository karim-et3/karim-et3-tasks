import {View} from 'react-native';
import React from 'react';
import courseStore from '../../../mobx/Course';
import {SelectList} from 'react-native-dropdown-select-list';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';

type Props = {};
const SubjectSelectBox = WithThemeAndLiteObserver<Props>(props => {
  const {COLORS} = props.theme;
  return (
    <View style={{width: '90%'}}>
      <View onTouchStart={() => courseStore.setFocusSubject()}>
        <SelectList
          data={['test_0', 'test_1', 'test_3']}
          setSelected={(sub: string) => courseStore.setTempSubject(sub)}
          boxStyles={{
            borderColor: courseStore.getFocusSubject
              ? COLORS.primary
              : COLORS.grey,
          }}
          defaultOption={{key: '1', value: courseStore.getTempSubject}}
          search={false}
          placeholder="Subject"
          dropdownStyles={{
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
