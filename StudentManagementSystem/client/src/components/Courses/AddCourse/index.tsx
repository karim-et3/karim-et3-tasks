import {View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import InputField from '../../../common/InputField';
import courseStore from '../../../mobx/Course';
import {COLORS} from '../../../styles';
import {CustomButton} from '../../../common';
import LoadingModal from '../../../common/LoadingModal';
import SubjectSelectBox from './SubjectSelectBox';

const AddCourse = WithThemeAndLiteObserver<{}>(props => {
  const blurRef = useRef(null);
  const {SIZES} = props.theme;
  useEffect(() => {
    return () => {
      courseStore.resetInput();
    };
  }, []);
  return (
    <>
      {courseStore.isLoading ? (
        <LoadingModal />
      ) : (
        <View style={{alignItems: 'center', margin: SIZES.xxLarge, gap: 10}}>
          <InputField
            blurRef={blurRef}
            numeric={false}
            icon={'file'}
            placeholder={'Course Code'}
            value={courseStore.getTempCode}
            setValue={e => courseStore.setTempCode(e)}
            focus={courseStore.getFocusCode}
            setFocus={() => courseStore.setFocusCode()}
          />
          <SubjectSelectBox />
          <InputField
            blurRef={blurRef}
            numeric={true}
            icon={'clock'}
            placeholder={'Duration'}
            value={courseStore.getTempDuration}
            setValue={e => courseStore.setTempDuration(e)}
            focus={courseStore.getFocusDuration}
            setFocus={() => courseStore.setFocusDuration()}
            maxLength={2}
          />
          <View style={{flex: 1, width: '90%', marginTop: 20}}>
            <CustomButton
              disabled={courseStore.getIsSubmitButtonDisabled}
              text={'Submit'}
              shadow="medium"
              textColor={COLORS.white}
              backgroundColor={COLORS.primary}
              onPress={() => {
                courseStore.setIsSubmitButtonDisabled(true);
                blurRef.current.blur();
                courseStore.addCourse();
              }}
            />
          </View>
        </View>
      )}
    </>
  );
});

export default AddCourse;
