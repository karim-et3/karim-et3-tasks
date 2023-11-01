import {View, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {InputField} from '../../../common';
import studentStore from '../../../mobx/Student';
import {LoadingModal} from '../../../common';
import {CustomButton} from '../../../common';
import {RouteProp} from '@react-navigation/native';

type Props = {
  route: RouteProp<{params: {id: number}}, 'params'>;
};
const EditStudent = WithThemeAndLiteObserver<Props>(props => {
  const blurRef = useRef<any>(null);
  const {route, theme} = props;
  const {COLORS, SIZES} = theme;
  const {id} = route.params;
  useEffect(() => {
    console.log('in edit');
    if (id) studentStore.setupEdit(id);
  }, [id]);
  useEffect(() => {
    return () => {
      console.log('out of edit');
      studentStore.resetInput();
    };
  }, []);
  return (
    <>
      {studentStore.isLoading ? (
        <LoadingModal />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: SIZES.xxLarge,
            gap: 16,
          }}>
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 9999,
              borderWidth: 0.5,
              borderColor: COLORS.secondary,
            }}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/000/350/111/original/vector-male-student-icon.jpg',
            }}
          />
          <InputField
            blurRef={blurRef}
            value={studentStore.getTempFirstName}
            setValue={e => studentStore.setTempFirstName(e)}
            icon="user"
            placeholder="First Name"
            focus={studentStore.firstNameFocus}
            setFocus={() => studentStore.setFirstNameFocus()}
            required={true}
            numeric={false}
          />
          <InputField
            blurRef={blurRef}
            value={studentStore.getTempLastName}
            setValue={e => studentStore.setTempLastName(e)}
            icon="user"
            placeholder="Last Name"
            focus={studentStore.lastNameFocus}
            setFocus={() => studentStore.setLastNameFocus()}
            required={true}
            numeric={false}
          />
          <InputField
            blurRef={blurRef}
            value={studentStore.getTempEmail}
            setValue={e => studentStore.setTempEmail(e)}
            icon="at"
            placeholder="Email"
            focus={studentStore.emailFocus}
            setFocus={() => studentStore.setEmailFocus()}
            required={true}
            numeric={false}
          />
          <InputField
            maxLength={8}
            blurRef={blurRef}
            value={studentStore.getTempPhoneNumber}
            setValue={e => studentStore.setTempPhoneNumber(e)}
            icon="phone"
            placeholder="Phone Number"
            focus={studentStore.phoneNumberFocus}
            setFocus={() => studentStore.setPhoneNumberFocus()}
            numeric={false}
          />
          <InputField
            blurRef={blurRef}
            value={studentStore.getTempAddress}
            setValue={e => studentStore.setTempAddress(e)}
            icon="location-dot"
            placeholder="Address"
            focus={studentStore.addressFocus}
            setFocus={() => studentStore.setAddressFocus()}
            numeric={false}
          />
          <CustomButton
            style={{marginTop: SIZES.large}}
            disabled={studentStore.getIsSubmitButtonDisabled}
            shadow="medium"
            text="Submit"
            textColor={COLORS.white}
            backgroundColor={COLORS.primary}
            onPress={() => {
              studentStore.setIsSubmitButtonDisabled(true);
              blurRef.current?.blur();
              studentStore.editStudent(id);
            }}
          />
        </View>
      )}
    </>
  );
});

export default EditStudent;
