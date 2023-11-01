import {runInAction} from 'mobx';
import toastStore from '../Toast';
import courseStore from '.';
import {navigate} from '../../routes/navigationRef';
import {axiosHelper} from '../../helpers';

const remove = async ({id}: {id: number}) => {
  try {
    courseStore.setIsLoading(true);
    const response = await axiosHelper({
      path: `courses/delete/${id}`,
      method: 'delete',
    });
    const index = courseStore.courses.findIndex(course => course.id === id);
    runInAction(async () => courseStore.courses.splice(index, 1));
    toastStore.changeVisiblity({
      message: response.data.message,
      error: false,
    });
    navigate('courses', {});
  } catch (error: any) {
    console.log(JSON.stringify(error.response.data, null, 3));
    toastStore.changeVisiblity({
      message: error.response.data.message,
      error: true,
    });
  } finally {
    courseStore.setIsLoading(false);
  }
};
export {remove};
