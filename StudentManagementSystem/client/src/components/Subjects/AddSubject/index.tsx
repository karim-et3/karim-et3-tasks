import {View} from 'react-native';
import React, {useEffect} from 'react';
import {InputField} from '../../../common';
import subjectStore from '../../../mobx/Subject';
import {CustomButton} from '../../../common';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';

const AddSubject = WithThemeAndLiteObserver<{}>(props => {
  const {COLORS, SIZES} = props.theme;
  useEffect(() => {
    return () => subjectStore.resetInput();
  }, []);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: SIZES.xxLarge,
      }}>
      <InputField
        required={true}
        numeric={false}
        icon={'font'}
        placeholder={'Name'}
        value={subjectStore.getTempName}
        setValue={n => subjectStore.setTempName(n)}
        focus={subjectStore.getFocusName}
        setFocus={() => subjectStore.setFocusName()}
      />
      <CustomButton
        disabled={subjectStore.isSubmitButtonDisabled}
        style={{marginTop: SIZES.large}}
        text={'Submit'}
        shadow="medium"
        textColor={COLORS.white}
        backgroundColor={COLORS.primary}
        onPress={() => {
          subjectStore.setIsSubmitButtonDisabled(true);
          subjectStore.addSubject();
        }}
      />
    </View>
  );
});

export default AddSubject;
