import {runInAction} from 'mobx';
import courseStore from '.';
import toastStore from '../Toast';
import {navigate} from '../../routes/NavigationRef';
import {TCourse} from '../../types';
import subjectStore from '../Subject';
import axiosHelper from '../../helpers/axiosHelper';

const create = ({code, subject, duration}: TCourse) => {
  runInAction(async () => {
    try {
      if (!code) {
        toastStore.changeVisiblity({
          message: 'Code is required',
          error: true,
        });
        return;
      }
      if (!subject) {
        toastStore.changeVisiblity({
          message: 'Subject is required',
          error: true,
        });
        return;
      }
      courseStore.setIsLoading(true);
      const indexSubjectID = subjectStore.subjects.findIndex(
        sub => sub.name === subject,
      );
      const subjectID = subjectStore.subjects[indexSubjectID].id;
      const response = await axiosHelper({
        path: 'courses/',
        method: 'POST',
        data: {code, subjectID, duration},
      });
      console.log(response.data);
      courseStore.courses.push(response.data.course);
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
  });
};
export {create};
