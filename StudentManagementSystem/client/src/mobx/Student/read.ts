import {runInAction} from 'mobx';
import toastStore from '../Toast';
import studentStore from '.';
import {mergeWith} from 'lodash';
import {TStudents} from '../../types';
import {axiosHelper} from '../../helpers';

const setupEdit = (id: number) => {
  runInAction(() => {
    studentStore.setIsLoading(true);
    const index = studentStore.students.findIndex(std => std.id === id);
    if (index !== -1) {
      const {firstName, lastName, email, dateOfBirth, phoneNumber, address} =
        studentStore.students[index];
      studentStore.setTempFirstName(firstName);
      studentStore.setTempLastName(lastName);
      studentStore.setTempEmail(email);
      studentStore.setTempDateOfBirth(dateOfBirth);
      studentStore.setTempPhoneNumber(phoneNumber);
      studentStore.setTempAddress(address);
    }
    studentStore.setIsLoading(false);
  });
};
const read = () => {
  runInAction(async () => {
    studentStore.setIsPrimeLoading(true);
    try {
      const response = await axiosHelper({
        path: 'students/',
        method: 'get',
      });
      studentStore.setStudents(response.data.students);
      console.log('student =>', JSON.stringify(studentStore.students, null, 3));
    } catch (error: any) {
      console.log(JSON.stringify(error.response.data, null, 3));
      toastStore.changeVisiblity({
        message: error.response.data.message,
        error: true,
      });
    } finally {
      studentStore.setIsPrimeLoading(false);
    }
  });
};
const customizer = ({
  id,
  firstName,
  lastName,
  email,
  dateOfBirth,
  phoneNumber,
  address,
  created_at,
  updated_at,
}: TStudents) => {
  return {id, firstName, lastName, email, dateOfBirth, phoneNumber, address};
};
const readSingle = (id: number) => {
  runInAction(() => {
    studentStore.setIsLoading(true);
    const index = studentStore.students.findIndex(std => std.id === id);
    studentStore.student = mergeWith(studentStore.students[index], customizer);
    console.log(JSON.stringify(studentStore.student, null, 3));
    studentStore.setIsLoading(false);
  });
};
export {read, readSingle, setupEdit};
