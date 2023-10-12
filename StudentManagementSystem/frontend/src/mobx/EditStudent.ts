import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TStudent, TStudentFocus} from '../types';
import axios from 'axios';
import {IP, PORT} from '@env';
import toastStore from './Toast';
import {navigate} from '../routes/NavigationRef';
import studentStore from './Students';
import studentDetailsStore from './StudentDetails';

class EditStudent {
  isLoading = observable.box<boolean>(true);
  isSubmitButtonDisabled = observable.box<boolean>(false);
  // tempStudent = observable.object<TStudent>(studentDetailsStore.student);
  // tempStudent = observable.object<TStudent>({
  //   id: studentDetailsStore.id,
  //   firstName: studentDetailsStore.firstName,
  //   lastName: studentDetailsStore.lastName,
  //   email: studentDetailsStore.email,
  //   dateOfBirth: studentDetailsStore.dateOfBirth,
  //   address: studentDetailsStore.address,
  //   phoneNumber: studentDetailsStore.phoneNumber,
  // });
  tempStudent = observable.object<TStudent>({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: new Date(),
    address: '',
    phoneNumber: '',
  });

  studentFocus = observable.object<TStudentFocus>({
    firstName: false,
    lastName: false,
    email: false,
    dateOfBirth: false,
    address: false,
    phoneNumber: false,
  });
  fetchStudent() {
    runInAction(() => {
      Object.assign(this.tempStudent, studentDetailsStore.getStudent);
      this.isLoading.set(false);
    });
  }

  editStudent() {
    runInAction(async () => {
      this.isSubmitButtonDisabled.set(true);
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      try {
        if (
          !this.tempStudent.firstName ||
          !this.tempStudent.lastName ||
          !this.tempStudent.email ||
          !this.tempStudent.dateOfBirth
        ) {
          const missingInput = !this.tempStudent.firstName
            ? 'First name is required.'
            : !this.tempStudent.lastName
            ? 'Last name is required.'
            : !this.tempStudent.email
            ? 'Email is required.'
            : !this.tempStudent.dateOfBirth
            ? 'Date of Birth is required.'
            : '';
          toastStore.changeVisiblity({message: missingInput, error: true});
        } else if (!emailRegex.test(this.tempStudent.email)) {
          toastStore.changeVisiblity({
            message: 'Invalid Email.',
            error: true,
          });
        } else {
          const result = await axios.put(
            `http://${IP}:${PORT}/students/edit/${this.tempStudent.id}`,
            {
              data: {
                first_name: this.tempStudent.firstName,
                last_name: this.tempStudent.lastName,
                email: this.tempStudent.email,
                date_of_birth: this.tempStudent.dateOfBirth,
                address: this.tempStudent.address,
                phone_number: this.tempStudent.phoneNumber,
              },
            },
          );
          console.log(JSON.stringify(result, null, 3));
          toastStore.changeVisiblity({
            message: result.data.message,
            error: false,
          });
        }
        // studentStore.getAllStudents();
        const index = studentStore.students.findIndex(
          std => std.id === studentDetailsStore.id,
        );
        studentStore.setFirstName(index, this.tempStudent.firstName);
        studentStore.setLastName(index, this.tempStudent.lastName);
        studentStore.setEmail(index, this.tempStudent.email);
        studentStore.setPhoneNumber(index, this.tempStudent.phoneNumber);
        studentStore.setAddress(index, this.tempStudent.address);
        studentStore.setDateOfBirth(index, this.tempStudent.dateOfBirth);

        studentDetailsStore.setFirstName(this.tempStudent.firstName);
        studentDetailsStore.setLastName(this.tempStudent.lastName);
        studentDetailsStore.setEmail(this.tempStudent.email);
        studentDetailsStore.setDateOfBirth(this.tempStudent.dateOfBirth);
        studentDetailsStore.setAddress(this.tempStudent.address);
        studentDetailsStore.setPhoneNumber(this.tempStudent.phoneNumber);
        navigate('student-details', {params: {id: this.tempStudent.id}});
      } catch (error) {
        console.log(JSON.stringify(error.response.data, null, 3));
        toastStore.changeVisiblity({
          message: error.response.data.message,
          error: true,
        });
      }
    });
  }
  resetInput() {
    runInAction(() => {
      this.setTempFirstName('');
      this.setTempLastName('');
      this.setTempEmail('');
      this.setTempPhoneNumber('');
      this.setTempAddress('');
      this.setTempDate(new Date());
      this.studentFocus.firstName = false;
      this.studentFocus.lastName = false;
      this.studentFocus.email = false;
      this.studentFocus.phoneNumber = false;
      this.studentFocus.address = false;
      this.studentFocus.dateOfBirth = false;
    });
  }
  setTempFirstName(firstName: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.firstName = firstName;
    });
  }
  setTempLastName(lastName: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.lastName = lastName;
    });
  }
  setTempEmail(email: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.email = email;
    });
  }
  setTempPhoneNumber(phoneNumber: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.phoneNumber = phoneNumber;
    });
  }
  setTempAddress(address: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.address = address;
    });
  }
  setTempDate(date: Date) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.dateOfBirth = date;
    });
  }

  get tempFirstName() {
    console.log('from mobx:');
    return this.tempStudent.firstName;
  }
  get tempLastName() {
    return this.tempStudent.lastName;
  }
  get tempEmail() {
    return this.tempStudent.email;
  }
  get tempPhoneNumber() {
    return this.tempStudent.phoneNumber;
  }
  get tempAddress() {
    return this.tempStudent.address;
  }
  get tempDateOfBirth() {
    return this.tempStudent.dateOfBirth;
  }

  setFirstNameFocus() {
    runInAction(() => {
      this.studentFocus.firstName = !this.studentFocus.firstName;
    });
  }
  setLastNameFocus() {
    runInAction(() => {
      this.studentFocus.lastName = !this.studentFocus.lastName;
    });
  }
  setEmailFocus() {
    runInAction(() => {
      this.studentFocus.email = !this.studentFocus.email;
    });
  }
  setPhoneNumberFocus() {
    runInAction(() => {
      this.studentFocus.phoneNumber = !this.studentFocus.phoneNumber;
    });
  }
  setAddressFocus() {
    runInAction(() => {
      this.studentFocus.address = !this.studentFocus.address;
    });
  }
  setDateFocus() {
    runInAction(() => {
      this.studentFocus.dateOfBirth = !this.studentFocus.dateOfBirth;
    });
  }

  get firstNameFocus() {
    return this.studentFocus.firstName;
  }
  get lastNameFocus() {
    return this.studentFocus.lastName;
  }
  get emailFocus() {
    return this.studentFocus.email;
  }
  get phoneNumberFocus() {
    return this.studentFocus.phoneNumber;
  }
  get addressFocus() {
    return this.studentFocus.address;
  }
  get dateOfBirthFocus() {
    return this.studentFocus.dateOfBirth;
  }

  get getIsSubmitButtonDisabled() {
    return this.isSubmitButtonDisabled.get();
  }

  logDetailsStore() {
    console.log('logDetailsStore', studentDetailsStore.getStudent);
  }
  logEditStore() {
    console.log('logEditStore', this.tempStudent);
  }
}

const createEditStudentInstance = memoize(
  () => new EditStudent(),
  () => 1,
);
const editStudentStore = createEditStudentInstance();
export default editStudentStore;
