import {View, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLORS} from '../../../styles';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import InputField from '../../../common/InputField';
import studentStore from '../../../mobx/Student';
import {CustomButton} from '../../../common';
import LoadingModal from '../../../common/LoadingModal';

const AddStudent = WithThemeAndLiteObserver<{}>(props => {
  const {SIZES} = props.theme;
  const blurRef = useRef(null);
  useEffect(() => {
    return () => {
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
            alignItems: 'center',
            justifyContent: 'center',
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
            numeric={false}
            blurRef={blurRef}
            value={studentStore.getTempFirstName}
            setValue={e => studentStore.setTempFirstName(e)}
            icon="user"
            placeholder="First Name"
            focus={studentStore.firstNameFocus}
            setFocus={() => studentStore.setFirstNameFocus()}
            required={true}
          />
          <InputField
            numeric={false}
            blurRef={blurRef}
            value={studentStore.getTempLastName}
            setValue={e => studentStore.setTempLastName(e)}
            icon="user"
            placeholder="Last Name"
            focus={studentStore.lastNameFocus}
            setFocus={() => studentStore.setLastNameFocus()}
            required={true}
          />
          <InputField
            numeric={false}
            blurRef={blurRef}
            value={studentStore.getTempEmail}
            setValue={e => studentStore.setTempEmail(e)}
            icon="at"
            placeholder="Email"
            focus={studentStore.emailFocus}
            setFocus={() => studentStore.setEmailFocus()}
            required={true}
          />
          <InputField
            numeric={false}
            blurRef={blurRef}
            value={studentStore.getTempPhoneNumber}
            setValue={e => studentStore.setTempPhoneNumber(e)}
            icon="phone"
            placeholder="Phone Number"
            focus={studentStore.phoneNumberFocus}
            setFocus={() => studentStore.setPhoneNumberFocus()}
          />
          <InputField
            numeric={false}
            blurRef={blurRef}
            value={studentStore.getTempAddress}
            setValue={e => studentStore.setTempAddress(e)}
            icon="location-dot"
            placeholder="Address"
            focus={studentStore.addressFocus}
            setFocus={() => studentStore.setAddressFocus()}
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
              blurRef.current.blur();
              studentStore.addStudent();
            }}
          />
        </View>
      )}
    </>
  );
});

export default AddStudent;
