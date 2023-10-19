import {View, Image, Button} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import InputField from '../../../common/InputField';
import studentStore from '../../../mobx/Student';
import {COLORS} from '../../../styles';
import LoadingModal from '../../../common/LoadingModal';

type Props = {};
const EditStudent = WithThemeAndLiteObserver<Props>(props => {
  const blurRef = useRef(null);
  const {route} = props;
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
          style={{alignItems: 'center', marginVertical: 30, gap: 16, flex: 1}}>
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
            value={studentStore.tempFirstName}
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
            value={studentStore.tempLastName}
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
            value={studentStore.tempEmail}
            setValue={e => studentStore.setTempEmail(e)}
            icon="at"
            placeholder="Email"
            focus={studentStore.emailFocus}
            setFocus={() => studentStore.setEmailFocus()}
            required={true}
            numeric={false}
          />
          <InputField
            blurRef={blurRef}
            value={studentStore.tempPhoneNumber}
            setValue={e => studentStore.setTempPhoneNumber(e)}
            icon="phone"
            placeholder="Phone Number"
            focus={studentStore.phoneNumberFocus}
            setFocus={() => studentStore.setPhoneNumberFocus()}
            numeric={false}
          />
          <InputField
            blurRef={blurRef}
            value={studentStore.tempAddress}
            setValue={e => studentStore.setTempAddress(e)}
            icon="location-dot"
            placeholder="Address"
            focus={studentStore.addressFocus}
            setFocus={() => studentStore.setAddressFocus()}
            numeric={false}
          />
          <View style={{width: '90%', marginTop: 30}}>
            <Button
              disabled={studentStore.getIsSubmitButtonDisabled}
              title="Submit"
              color={COLORS.primary}
              onPress={() => {
                blurRef.current.blur();
                studentStore.editStudent();
              }}></Button>
          </View>
        </View>
      )}
    </>
  );
});

export default EditStudent;
