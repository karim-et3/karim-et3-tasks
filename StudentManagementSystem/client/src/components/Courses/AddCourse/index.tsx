import {View} from 'react-native';
import React, {useEffect} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import InputField from '../../../common/InputField';
import courseStore from '../../../mobx/Course';
import {COLORS} from '../../../styles';
import {CustomButton} from '../../../common';
import LoadingModal from '../../../common/LoadingModal';
import SubjectSelectBox from './SubjectSelectBox';

const AddCourse = WithThemeAndLiteObserver<{}>(props => {
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
            numeric={false}
            icon={'file'}
            placeholder={'Course Code'}
            value={courseStore.getCode}
            setValue={e => courseStore.setCode(e)}
            focus={courseStore.getFocusCode}
            setFocus={() => courseStore.setFocusCode()}
          />
          <SubjectSelectBox />
          <InputField
            numeric={true}
            icon={'clock'}
            placeholder={'Duration'}
            value={courseStore.getDuration}
            setValue={e => courseStore.setDuration(e)}
            focus={courseStore.getFocusDuration}
            setFocus={() => courseStore.setFocusDuration()}
            maxLength={2}
          />
          <View style={{flex: 1, width: '90%', marginTop: 20}}>
            <CustomButton
              text={'Submit'}
              shadow="medium"
              textColor={COLORS.white}
              backgroundColor={COLORS.primary}
              onPress={courseStore.postCourse}
            />
          </View>
        </View>
      )}
    </>
  );
});

export default AddCourse;
