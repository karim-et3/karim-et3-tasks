import {View} from 'react-native';
import React, {useEffect} from 'react';
import LoadingModal from '../../../common/LoadingModal';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import InputField from '../../../common/InputField';
import {CustomButton} from '../../../common';
import courseStore from '../../../mobx/Course';
import SubjectSelectBox from './SubjectSelectBox';
import DeleteCourse from '../DeleteCourse/DeleteCourse';
type Props = {
  route: any;
};
const EditCourse = WithThemeAndLiteObserver<Props>(props => {
  const {route, theme} = props;
  const {COLORS, SIZES} = theme;
  const {id} = route.params;
  useEffect(() => {
    console.log('in edit');
    if (id) courseStore.setupEdit(id);
  }, [id]);
  useEffect(() => {
    return () => {
      console.log('reset');
      courseStore.resetInput();
    };
  }, []);
  return (
    <>
      {courseStore.isLoading ? (
        <LoadingModal />
      ) : (
        <View
          style={{
            alignItems: 'center',
            margin: SIZES.xxLarge,
            gap: 10,
          }}>
          <DeleteCourse id={id} />
          <InputField
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
              text={'Submit'}
              shadow="medium"
              textColor={COLORS.white}
              backgroundColor={COLORS.primary}
              onPress={() => courseStore.putCourse()}
            />
          </View>
        </View>
      )}
    </>
  );
});

export default EditCourse;
