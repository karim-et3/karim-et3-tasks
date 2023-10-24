import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import subjectStore from '../../../mobx/Subject';
import InputField from '../../../common/InputField';
import LoadingModal from '../../../common/LoadingModal';
import {CustomButton} from '../../../common';
import DeleteCourse from '../../Courses/DeleteCourse/DeleteCourse';
import DeleteSubject from '../DeleteSubject';

const EditSubject = WithThemeAndLiteObserver<{}>(props => {
  const {route, theme} = props;
  const {COLORS, SIZES} = theme;
  const {id} = route.params;
  useEffect(() => {
    if (id) subjectStore.setupEdit({id});
  }, [id]);
  useEffect(() => {
    return () => subjectStore.resetInput();
  }, []);
  return (
    <View style={{margin: SIZES.xxLarge}}>
      {subjectStore.isLoading ? (
        <LoadingModal />
      ) : (
        <>
          <DeleteSubject id={id} />
          <InputField
            numeric={false}
            icon={'font'}
            placeholder={'Name'}
            value={subjectStore.getTempName}
            setValue={n => subjectStore.setTempName(n)}
            focus={subjectStore.getFocusName}
            setFocus={() => subjectStore.setFocusName()}
          />
          <CustomButton
            style={{marginTop: SIZES.large}}
            text={'Submit'}
            textColor={COLORS.white}
            backgroundColor={COLORS.primary}
            onPress={() => {
              subjectStore.setIsSubmitButtonDisabled(true);
              subjectStore.putSubject({id});
            }}
          />
        </>
      )}
    </View>
  );
});

export default EditSubject;
