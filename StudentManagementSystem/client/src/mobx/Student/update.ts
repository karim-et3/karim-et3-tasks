import {runInAction} from 'mobx';
import studentStore from '.';
import {navigate} from '../../routes/NavigationRef';
import toastStore from '../Toast';
import {TStudent} from '../../types';
import {merge} from 'lodash';
import {readSingle} from './read';
import axiosHelper from '../../helpers/axiosHelper';

const update = ({
  id,
  firstName,
  lastName,
  email,
  phoneNumber,
  dateOfBirth,
  address,
}: {id: number} & TStudent) => {
  runInAction(async () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegex = /^(?:\D*|\d{8})$/;
    try {
      if (!studentStore.student.firstName) {
        toastStore.changeVisiblity({
          message: 'First name is required.',
          error: true,
        });
        return;
      }
      if (!studentStore.student.lastName) {
        toastStore.changeVisiblity({
          message: 'Last name is required.',
          error: true,
        });
        return;
      }
      if (!studentStore.student.firstName) {
        toastStore.changeVisiblity({
          message: 'Email is required.',
          error: true,
        });
        return;
      }
      if (!studentStore.student.firstName) {
        toastStore.changeVisiblity({
          message: 'Date of birth is required.',
          error: true,
        });
        return;
      }
      if (!emailRegex.test(studentStore.student.email)) {
        toastStore.changeVisiblity({
          message: 'Invalid Email.',
          error: true,
        });
        return;
      }
      if (!phoneRegex.test(studentStore.student.phoneNumber)) {
        toastStore.changeVisiblity({
          message: 'Invalid Phone number.',
          error: true,
        });
        return;
      }

      studentStore.setIsLoading(true);
      const response = await axiosHelper({
        path: `students/edit/${id}`,
        method: 'PUT',
        data: {
          data: {
            firstName,
            lastName,
            email,
            phoneNumber,
            dateOfBirth,
            address,
          },
        },
      });
      toastStore.changeVisiblity({
        message: response.data.message,
        error: false,
      });
      const index = studentStore.students.findIndex(std => std.id === id);
      const student = response.data.student;
      // **SHALLOW** studentStore.student = student;
      // **SHALLOW** studentStore.student = clone(student);
      // **Copy** merge(studentStore.student, student);
      // **Copy** Object.assign(studentStore.student, student);
      // **Copy** merge(studentStore.students[index], student);
      // **Copy +** studentStore.student = Object.assign({}, student);
      // **Copy +** studentStore.students[index] = merge(student);

      studentStore.students[index] = merge(student);
      readSingle(id);
      navigate('student-details', {id});
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
export {update};
