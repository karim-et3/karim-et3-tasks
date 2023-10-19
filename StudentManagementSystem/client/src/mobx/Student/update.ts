import {runInAction} from 'mobx';
import studentStore from '.';
import {IP, PORT} from '@env';
import axios from 'axios';
import {navigate} from '../../routes/NavigationRef';
import toastStore from '../Toast';
import {TStudent} from '../../types';
import {merge} from 'lodash';
import {readSingle} from './read';

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
    studentStore.setIsLoading(true);
    studentStore.isSubmitButtonDisabled.set(true);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    try {
      if (
        !studentStore.firstName ||
        !studentStore.lastName ||
        !studentStore.email ||
        !studentStore.dateOfBirth
      ) {
        const missingInput = !studentStore.firstName
          ? 'First name is required.'
          : !studentStore.lastName
          ? 'Last name is required.'
          : !studentStore.email
          ? 'Email is required.'
          : !studentStore.dateOfBirth
          ? 'Date of Birth is required.'
          : '';
        toastStore.changeVisiblity({message: missingInput, error: true});
      } else if (!emailRegex.test(studentStore.email)) {
        toastStore.changeVisiblity({
          message: 'Invalid Email.',
          error: true,
        });
      } else {
        const response = await axios.put(
          `http://${IP}:${PORT}/students/edit/${id}`,
          {
            data: {
              firstName,
              lastName,
              email,
              phoneNumber,
              dateOfBirth,
              address,
            },
          },
        );
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
      }
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
