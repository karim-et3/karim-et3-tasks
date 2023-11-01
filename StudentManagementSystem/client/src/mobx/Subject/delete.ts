import {runInAction} from 'mobx';
import toastStore from '../Toast';
import subjectStore from '.';
import {navigate} from '../../routes/navigationRef';
import courseStore from '../Course';
import {axiosHelper} from '../../helpers';

const remove = async ({id}: {id: number}) => {
  try {
    subjectStore.setIsLoading(true);
    const response = await axiosHelper({
      path: `subjects/delete/${id}`,
      method: 'delete',
    });
    const index = subjectStore.subjects.findIndex(subject => subject.id === id);
    runInAction(() => {
      subjectStore.subjects.splice(index, 1);
      courseStore.setCourses(
        courseStore.courses.filter(course => course.subjectID !== id),
      );
      courseStore.refresh.set(!courseStore.getRefresh);
    });
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
};
export {remove};
