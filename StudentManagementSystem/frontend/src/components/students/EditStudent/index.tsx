import {View, Image, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import InputField from '../../../common/InputField';
import editStudentStore from '../../../mobx/EditStudent';
import Loading from '../../../common/Loading';
import {COLORS} from '../../../styles';

const EditStudent = () => {
  const blurRef = useRef(null);
  useEffect(() => {
    editStudentStore.fetchStudent();
  }, []);
  return (
    <View style={{alignItems: 'center', marginVertical: 30, gap: 16, flex: 1}}>
      {editStudentStore.isLoading.get() ? (
        <Loading />
      ) : (
        <>
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
            value={editStudentStore.tempFirstName}
            setValue={(e: string) => editStudentStore.setTempFirstName(e)}
            icon="user"
            placeholder="First Name"
            focus={editStudentStore.firstNameFocus}
            setFocus={() => editStudentStore.setFirstNameFocus()}
            required={true}
          />
          <InputField
            blurRef={blurRef}
            value={editStudentStore.tempLastName}
            setValue={(e: string) => editStudentStore.setTempLastName(e)}
            icon="user"
            placeholder="Last Name"
            focus={editStudentStore.lastNameFocus}
            setFocus={() => editStudentStore.setLastNameFocus()}
            required={true}
          />
          <InputField
            blurRef={blurRef}
            value={editStudentStore.tempEmail}
            setValue={(e: string) => editStudentStore.setTempEmail(e)}
            icon="at"
            placeholder="Email"
            focus={editStudentStore.emailFocus}
            setFocus={() => editStudentStore.setEmailFocus()}
            required={true}
          />
          <InputField
            blurRef={blurRef}
            value={editStudentStore.tempPhoneNumber}
            setValue={(e: string) => editStudentStore.setTempPhoneNumber(e)}
            icon="phone"
            placeholder="Phone Number"
            focus={editStudentStore.phoneNumberFocus}
            setFocus={() => editStudentStore.setPhoneNumberFocus()}
          />
          <InputField
            blurRef={blurRef}
            value={editStudentStore.tempAddress}
            setValue={(e: string) => editStudentStore.setTempAddress(e)}
            icon="location-dot"
            placeholder="Address"
            focus={editStudentStore.addressFocus}
            setFocus={() => editStudentStore.setAddressFocus()}
          />
          <View style={{width: '90%', marginTop: 30}}>
            <Button
              disabled={editStudentStore.getIsSubmitButtonDisabled}
              title="Submit"
              color={COLORS.primary}
              onPress={() => {
                blurRef.current.blur();
                editStudentStore.editStudent();
              }}></Button>
          </View>
        </>
      )}
    </View>
  );
};

export default WithThemeAndLiteObserver(EditStudent);
