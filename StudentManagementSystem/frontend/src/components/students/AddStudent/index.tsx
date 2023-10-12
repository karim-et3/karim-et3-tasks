import {View, Image, Button} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLORS} from '../../../styles';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import InputField from '../../../common/InputField';
import addStudentStore from '../../../mobx/AddStudent';
import {CustomButton} from '../../../common';

const AddStudent = () => {
  const blurRef = useRef(null);
  useEffect(() => {
    return () => {
      addStudentStore.resetInput();
    };
  }, []);
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
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
        value={addStudentStore.firstName}
        setValue={(e: string) => addStudentStore.setFirstName(e)}
        icon="user"
        placeholder="First Name"
        focus={addStudentStore.firstNameFocus}
        setFocus={() => addStudentStore.setFirstNameFocus()}
        required={true}
      />
      <InputField
        blurRef={blurRef}
        value={addStudentStore.lastName}
        setValue={(e: string) => addStudentStore.setLastName(e)}
        icon="user"
        placeholder="Last Name"
        focus={addStudentStore.lastNameFocus}
        setFocus={() => addStudentStore.setLastNameFocus()}
        required={true}
      />
      <InputField
        blurRef={blurRef}
        value={addStudentStore.email}
        setValue={(e: string) => addStudentStore.setEmail(e)}
        icon="at"
        placeholder="Email"
        focus={addStudentStore.emailFocus}
        setFocus={() => addStudentStore.setEmailFocus()}
        required={true}
      />
      <InputField
        blurRef={blurRef}
        value={addStudentStore.phoneNumber}
        setValue={(e: string) => addStudentStore.setPhoneNumber(e)}
        icon="phone"
        placeholder="Phone Number"
        focus={addStudentStore.phoneNumberFocus}
        setFocus={() => addStudentStore.setPhoneNumberFocus()}
      />
      <InputField
        blurRef={blurRef}
        value={addStudentStore.address}
        setValue={(e: string) => addStudentStore.setAddress(e)}
        icon="location-dot"
        placeholder="Address"
        focus={addStudentStore.addressFocus}
        setFocus={() => addStudentStore.setAddressFocus()}
      />
      <View
        style={{
          width: '90%',
        }}>
        <CustomButton
          disabled={addStudentStore.getIsSubmitButtonDisabled}
          shadow="medium"
          text="Submit"
          textColor={COLORS.white}
          backgroundColor={COLORS.primary}
          onPress={() => {
            blurRef.current.blur();
            addStudentStore.addStudent();
          }}
        />
      </View>
    </View>
  );
};

export default WithThemeAndLiteObserver(AddStudent);
