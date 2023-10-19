import {runInAction} from 'mobx';
import studentStore from '.';
import toastStore from '../Toast';
import {IP, PORT} from '@env';
import axios from 'axios';
import {navigate} from '../../routes/NavigationRef';
import {TStudent} from '../../types';

const create = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  dateOfBirth,
  address,
}: TStudent) => {
  runInAction(async () => {
    studentStore.setIsLoading(true);
    studentStore.isSubmitButtonDisabled.set(true);
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

      const response = await axios.post(`http://${IP}:${PORT}/students`, {
        data: {firstName, lastName, email, phoneNumber, dateOfBirth, address},
      });
      toastStore.changeVisiblity({
        message: response.data.message,
        error: false,
      });
      console.log(
        'response.data.student',
        JSON.stringify(response.data.student, null, 6),
      );
      studentStore.students.push(response.data.student);
      navigate('students', {});
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

export {create};
