import {runInAction} from 'mobx';
import toastStore from '../Toast';
import subjectStore from '.';
import {navigate} from '../../routes/NavigationRef';
import courseStore from '../Course';
import axiosHelper from '../../helpers/axiosHelper';

const remove = ({id}: {id: number}) => {
  runInAction(async () => {
    try {
      subjectStore.setIsLoading(true);
      const response = await axiosHelper({
        path: `subjects/delete/${id}`,
        method: 'DELETE',
      });
      const index = subjectStore.subjects.findIndex(
        subject => subject.id === id,
      );
      subjectStore.subjects.splice(index, 1);
      courseStore.fetchCourses();
      toastStore.changeVisiblity({
        message: response.data.message,
        error: false,
      });
      navigate('subjects', {});
    } catch (error: any) {
      console.log(JSON.stringify(error.response.data, null, 3));
      toastStore.changeVisiblity({
        message: error.response.data.message,
        error: true,
      });
    } finally {
      subjectStore.setIsLoading(false);
    }
  });
};
export {remove};
