import {IP, PORT} from '@env';
import axios from 'axios';
import {runInAction} from 'mobx';
import toastStore from '../Toast';
import studentStore from '.';
import {cloneWith, merge} from 'lodash';
import {TStudents} from '../../types';

const setupEdit = (id: number) => {
  runInAction(() => {
    studentStore.setIsLoading(true);
    const index = studentStore.students.findIndex(std => std.id === id);
    studentStore.tempStudent = merge(studentStore.students[index]);
    // Object.assign(studentStore.tempStudent, studentStore.students[index]);
    studentStore.setIsLoading(false);
  });
};
const read = () => {
  runInAction(async () => {
    studentStore.setIsLoading(true);
    try {
      const result = await axios.get(`http://${IP}:${PORT}/students`);
      studentStore.students.replace(result.data.students);
      console.log('student =>', JSON.stringify(studentStore.students, null, 3));
    } catch (error: any) {
      console.log(JSON.stringify(error.response.data, null, 3));
      toastStore.changeVisiblity({
        message: error.response.data.message,
        error: true,
      });
    } finally {
      studentStore.setIsLoading(false);
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
    studentStore.student = cloneWith(studentStore.students[index], customizer);
    console.log(JSON.stringify(studentStore.student, null, 3));
    studentStore.setIsLoading(false);
  });
};
export {read, readSingle, setupEdit};
