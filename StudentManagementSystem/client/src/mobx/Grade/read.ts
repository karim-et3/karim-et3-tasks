import {runInAction} from 'mobx';
import toastStore from '../Toast';
import gradeStore from '.';
import axiosHelper from '../../helpers/axiosHelper';

const read = () => {};
const readSingle = (id: number) => {
  runInAction(async () => {
    try {
      gradeStore.setIsLoading(true);
      const response = await axiosHelper({
        path: 'grades/',
        method: 'GET',
        params: {
          studentID: id,
        },
      });
      console.log('grades =>', JSON.stringify(response.data.result, null, 3));
      gradeStore.setGrades(response.data.result);
      gradeStore.setCoursesChecked();
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
