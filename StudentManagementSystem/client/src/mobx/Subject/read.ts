import subjectStore from '.';
import toastStore from '../Toast';
import {runInAction} from 'mobx';
import axiosHelper from '../../helpers/axiosHelper';

const setupEdit = ({id}: {id: number}) => {
  runInAction(() => {
    subjectStore.setIsLoading(true);
    const index = subjectStore.subjects.findIndex(subject => subject.id === id);
    const {name} = subjectStore.subjects[index];
    subjectStore.setTempName(name);
    subjectStore.setIsLoading(false);
  });
};
const read = () => {
  runInAction(async () => {
    try {
      subjectStore.setIsLoading(true);
      const response = await axiosHelper({
        path: 'subjects/',
        method: 'GET',
      });
      console.log(
        'subjects =>',
        JSON.stringify(response.data.subjects, null, 3),
      );
      subjectStore.subjects.replace(response.data.subjects);
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
export {setupEdit, read};
