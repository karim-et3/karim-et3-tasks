import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TStudent} from '../types';
import axios from 'axios';
import {IP, PORT} from '@env';
import toastStore from './Toast';

export class StudentDetails {
  student = observable.object<TStudent>({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: new Date(),
    address: '',
  });

  fetchStudent(id: number) {
    runInAction(async () => {
      try {
        const result = await axios.get(`http://${IP}:${PORT}/students/${id}`);
        this.setFirstName(result.data.student.first_name);
        this.setLastName(result.data.student.last_name);
        this.setEmail(result.data.student.email);
        this.setPhoneNumber(result.data.student.phone_number);
        this.setAddress(result.data.student.address);
        this.setDateOfBirth(result.data.student.date_of_birth);
        this.student.id = result.data.student.id;
      } catch (error) {
        console.log(JSON.stringify(error.response.data, null, 3));
        toastStore.changeVisiblity({
          message: error.response.data.message,
          error: true,
        });
      }
    });
  }

  setFirstName(firstName: string) {
    // runInAction(() => {
    this.student.firstName = firstName;
    // });
  }
  setLastName(lastName: string) {
    // runInAction(() => {
    this.student.lastName = lastName;
    // });
  }
  setEmail(email: string) {
    // runInAction(() => {
    this.student.email = email;
    // });
  }
  setPhoneNumber(phoneNumber: string) {
    // runInAction(() => {
    this.student.phoneNumber = phoneNumber;
    // });
  }
  setAddress(address: string) {
    // runInAction(() => {
    this.student.address = address;
    // });
  }
  setDateOfBirth(date: Date) {
    // runInAction(() => {
    this.student.dateOfBirth = date;
    // });
  }
  get id() {
    return this.student.id;
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
  get getStudent() {
    return this.student;
  }
}
const createStudentDetailsInstance = memoize(
  () => new StudentDetails(),
  () => 1,
);
const studentDetailsStore = createStudentDetailsInstance();
export default studentDetailsStore;
