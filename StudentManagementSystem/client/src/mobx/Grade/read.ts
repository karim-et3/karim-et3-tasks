import {IP, PORT} from '@env';
import axios from 'axios';
import {runInAction} from 'mobx';
import toastStore from '../Toast';
import gradeStore from '.';

const read = () => {};
const readSingle = (id: number) => {
  runInAction(async () => {
    try {
      gradeStore.setIsLoading(true);
      const result = await axios.get(
        `http://${IP}:${PORT}/grades/?student_id=${id}`,
      );
      console.log('grades =>', JSON.stringify(result.data.result, null, 3));
      gradeStore.setGrades(result.data.result);
      gradeStore.setCoursesCheked();
    } catch (error: any) {
      console.log(JSON.stringify(error.response.data, null, 3));
      toastStore.changeVisiblity({
        message: error.response.data.message,
        error: true,
      });
    } finally {
      gradeStore.setIsLoading(false);
    }
  });
};
export {read, readSingle};
