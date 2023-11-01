import subjectStore from '.';
import {TSubject} from '../../types';
import toastStore from '../Toast';
import {runInAction} from 'mobx';
import {merge} from 'lodash';
import {navigate} from '../../routes/navigationRef';
import {axiosHelper} from '../../helpers';

const update = async ({id, name}: {id: number} & TSubject) => {
  try {
    subjectStore.setIsLoading(true);
    if (!name) {
      toastStore.changeVisiblity({
        message: "Subject's name is required",
        error: true,
      });
      return;
    }
    const response = await axiosHelper({
      path: `subjects/edit/${id}`,
      method: 'put',
      data: {data: {name}},
    });

    const index = subjectStore.subjects.findIndex(subject => subject.id === id);
    runInAction(async () => {
      subjectStore.subjects[index] = merge(response.data.subject);
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
export {update};
