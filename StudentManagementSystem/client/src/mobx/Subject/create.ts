import subjectStore from '.';
import toastStore from '../Toast';
import {runInAction} from 'mobx';
import {navigate} from '../../routes/NavigationRef';
import {TSubject} from '../../types';
import axiosHelper from '../../helpers/axiosHelper';

const create = async ({name}: TSubject) => {
  try {
    if (!name) {
      toastStore.changeVisiblity({
        message: "Subject's Name is required.",
        error: true,
      });
      return;
    }
    subjectStore.setIsLoading(true);
    const response = await axiosHelper({
      path: 'subjects/',
      method: 'POST',
      data: {subject: {name}},
    });

    runInAction(() => subjectStore.subjects.push(response.data.subject));

    toastStore.changeVisiblity({
      message: 'Subject added.',
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
    if (subjectStore.isLoading) subjectStore.setIsLoading(false);
  }
};

export {create};
