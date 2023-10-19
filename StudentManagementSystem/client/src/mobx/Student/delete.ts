import {IP, PORT} from '@env';
import axios from 'axios';
import studentStore from '.';
import toastStore from '../Toast';
import {runInAction} from 'mobx';
import {navigate} from '../../routes/NavigationRef';

const remove = ({id}: {id: number}) => {
  runInAction(async () => {
    try {
      studentStore.setIsLoading(true);
      const result = await axios.delete(
        `http://${IP}:${PORT}/students/delete/${id}`,
      );
      console.log(result.data);
      const index = studentStore.students.findIndex(std => std.id === id);
      studentStore.students.splice(index, 1);
      toastStore.changeVisiblity({
        message: result.data.message,
        error: false,
      });
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
export {remove};
