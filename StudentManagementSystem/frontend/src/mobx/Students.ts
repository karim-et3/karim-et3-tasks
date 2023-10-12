import axios from 'axios';
import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import toastStore from './Toast';
import {IP, PORT} from '@env';
import {navigate} from '../routes/NavigationRef';
import {TStudent} from '../types';

class Students {
  students = observable.array<TStudent>();

  getAllStudents() {
    runInAction(async () => {
      try {
        const result = await axios.get(`http://${IP}:${PORT}/students`);
        this.students.replace(result.data.students);
        console.log(this.students);
      } catch (error) {
        console.log(JSON.stringify(error.response.data, null, 3));
        toastStore.changeVisiblity({
          message: error.response.data.message,
          error: true,
        });
      }
    });
  }

  delete(id: number) {
    runInAction(async () => {
      try {
        const result = await axios.delete(
          `http://${IP}:${PORT}/students/delete/${id}`,
        );
        console.log(result.data);
        // this.getAllStudents();
        const index = this.students.findIndex(std => std.id === id);
        this.students.splice(index, 1);
        // this.students.remove()
        toastStore.changeVisiblity({
          message: result.data.message,
          error: false,
        });
        navigate('students', {});
      } catch (error) {
        console.log(JSON.stringify(error.response.data, null, 3));
        toastStore.changeVisiblity({
          message: error.response.data.message,
          error: true,
        });
      }
    });
  }

  setFirstName(index: number, firstname: string) {
    runInAction(() => {
      this.students[index].firstName = firstname;
    });
  }
  setLastName(index: number, lastName: string) {
    runInAction(() => {
      this.students[index].lastName = lastName;
    });
  }
  setEmail(index: number, email: string) {
    runInAction(() => {
      this.students[index].email = email;
    });
  }
  setPhoneNumber(index: number, phoneNumber: string) {
    runInAction(() => {
      this.students[index].phoneNumber = phoneNumber;
    });
  }
  setAddress(index: number, address: string) {
    runInAction(() => {
      this.students[index].address = address;
    });
  }
  setDateOfBirth(index: number, dateOfBirth: Date) {
    runInAction(() => {
      this.students[index].dateOfBirth = dateOfBirth;
    });
  }
}
const createStudentInstance = memoize(
  () => new Students(),
  () => 1,
);
const studentStore = createStudentInstance();
export default studentStore;
