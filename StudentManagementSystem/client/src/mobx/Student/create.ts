import {runInAction} from 'mobx';
import studentStore from '.';
import toastStore from '../Toast';
import {navigate} from '../../routes/NavigationRef';
import {TStudent} from '../../types';
import axiosHelper from '../../helpers/axiosHelper';

const create = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  dateOfBirth,
  address,
}: TStudent) => {
  runInAction(async () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegex = /^(?:\D*|\d{8})$/;
    try {
      if (!firstName) {
        toastStore.changeVisiblity({
          message: 'First name is required.',
          error: true,
        });
        return;
      }
      if (!lastName) {
        toastStore.changeVisiblity({
          message: 'Last name is required.',
          error: true,
        });
        return;
      }
      if (!email) {
        toastStore.changeVisiblity({
          message: 'Email is required.',
          error: true,
        });
        return;
      }
      if (!dateOfBirth) {
        toastStore.changeVisiblity({
          message: 'Date of birth is required.',
          error: true,
        });
        return;
      }
      if (!emailRegex.test(email)) {
        toastStore.changeVisiblity({
          message: 'Invalid Email.',
          error: true,
        });
        return;
      }
      if (!phoneRegex.test(phoneNumber)) {
        toastStore.changeVisiblity({
          message: 'Invalid Phone number.',
          error: true,
        });
        return;
      }
      studentStore.setIsLoading(true);
      const response = await axiosHelper({
        path: 'students/',
        method: 'POST',
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
