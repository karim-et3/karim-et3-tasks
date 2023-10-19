import {IP, PORT} from '@env';
import axios from 'axios';
import {runInAction} from 'mobx';
import gradeStore from '.';
import {navigate} from '../../routes/NavigationRef';
import toastStore from '../Toast';

const update = () => {};
const updateCoursesChecked = (id: number) => {
  runInAction(async () => {
    try {
      gradeStore.setIsLoading(true);
      const result = await axios.post(
        `http://${IP}:${PORT}/grades/edit-courses`,
        {
          id,
          coursesCheked: gradeStore.getCoursesChecked,
        },
      );
      toastStore.changeVisiblity({
        message: result.data.message,
        error: false,
      });
      navigate('student-details', {params: {id}});
      gradeStore.fetchGradesForStudent(id);
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
