import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TStudent, TStudentFocus} from '../types';
import axios from 'axios';
import {IP, PORT} from '@env';
import toastStore from './Toast';
import {navigate} from '../routes/NavigationRef';
import studentStore from './Students';

class AddStudent {
  isSubmitButtonDisabled = observable.box<boolean>(false);
  student = observable.object<TStudent>({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: new Date(),
    address: '',
    phoneNumber: '',
  });
  tempStudent = observable.object<TStudent>({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: new Date(),
    address: '',
  });
  studentFocus = observable.object<TStudentFocus>({
    firstName: false,
    lastName: false,
    email: false,
    dateOfBirth: false,
    address: false,
    phoneNumber: false,
  });

  addStudent() {
    runInAction(async () => {
      this.isSubmitButtonDisabled.set(true);
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const phoneRegex = /^(?:\D*|\d{8})$/;
      try {
        if (
          !this.student.firstName ||
          !this.student.lastName ||
          !this.student.email ||
          !this.student.dateOfBirth
        ) {
          const missingInput = !this.student.firstName
            ? 'First name is required.'
            : !this.student.lastName
            ? 'Last name is required.'
            : !this.student.email
            ? 'Email is required.'
            : !this.student.dateOfBirth
            ? 'Date of Birth is required.'
            : '';
          toastStore.changeVisiblity({message: missingInput, error: true});
        } else if (!emailRegex.test(this.student.email)) {
          toastStore.changeVisiblity({
            message: 'Invalid Email.',
            error: true,
          });
        } else if (!phoneRegex.test(this.student.phoneNumber)) {
          toastStore.changeVisiblity({
            message: 'Invalid Phone number.',
            error: true,
          });
        } else {
          const result = await axios.post(`http://${IP}:${PORT}/students`, {
            data: this.student,
          });
          toastStore.changeVisiblity({
            message: result.data.message,
            error: false,
          });
          studentStore.getAllStudents();
          navigate('students', {});
        }
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
    this.setFirstName('');
    this.setLastName('');
    this.setEmail('');
    this.setPhoneNumber('');
    this.setAddress('');
    this.setDate(new Date());

    this.studentFocus.firstName = false;
    this.studentFocus.lastName = false;
    this.studentFocus.email = false;
    this.studentFocus.phoneNumber = false;
    this.studentFocus.address = false;
    this.studentFocus.dateOfBirth = false;
  }
  setFirstName(firstName: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.student.firstName = firstName;
    });
  }
  setLastName(lastName: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.student.lastName = lastName;
    });
  }
  setEmail(email: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.student.email = email;
    });
  }
  setPhoneNumber(phoneNumber: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.student.phoneNumber = phoneNumber;
    });
  }
  setAddress(address: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.student.address = address;
    });
  }
  setDate(date: Date) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.student.dateOfBirth = date;
    });
  }

  get firstName() {
    return this.student.firstName;
  }
  get lastName() {
    return this.student.lastName;
  }
  get email() {
    return this.student.email;
  }
  get phoneNumber() {
    return this.student.phoneNumber;
  }
  get address() {
    return this.student.address;
  }
  get dateOfBirth() {
    return this.student.dateOfBirth;
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
}

const createAddStudentInstance = memoize(
  () => new AddStudent(),
  () => 1,
);
const addStudentStore = createAddStudentInstance();
export default addStudentStore;
