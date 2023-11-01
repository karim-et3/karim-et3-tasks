import {runInAction} from 'mobx';
import gradeStore from '.';
import {navigate} from '../../routes/navigationRef';
import toastStore from '../Toast';
import {axiosHelper} from '../../helpers';

const update = () => {};
const updateCoursesChecked = (id: number) => {
  runInAction(async () => {
    try {
      gradeStore.setIsLoading(true);
      const response = await axiosHelper({
        path: 'grades/edit-courses/',
        method: 'post',
        data: {data: {id, coursesCheked: gradeStore.getCoursesChecked}},
      });

      toastStore.changeVisiblity({
        message: response.data.message,
        error: false,
      });
      // gradeStore.fetchGradesForStudent(id);
      navigate('student-details', {id});
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
export {updateCoursesChecked, update};
