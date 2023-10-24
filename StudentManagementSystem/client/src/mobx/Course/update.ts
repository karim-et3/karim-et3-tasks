import {runInAction} from 'mobx';
import toastStore from '../Toast';
import courseStore from '.';
import {navigate} from '../../routes/NavigationRef';
import {TCourse, TCourses} from '../../types';
import {mergeWith} from 'lodash';
import subjectStore from '../Subject';
import axiosHelper from '../../helpers/axiosHelper';

const update = ({id, code, subject, duration}: {id: number} & TCourse) => {
  const customizer_ = ({
    id,
    code,
    subject_id,
    duration,
    created_at,
    updated_at,
  }: TCourses) => {
    return {id, code, subject_id, duration, created_at, updated_at};
  };
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
        path: `courses/edit/${id}`,
        method: 'PUT',
        data: {
          data: {
            code,
            subjectID,
            duration,
          },
        },
      });
      toastStore.changeVisiblity({
        message: response.data.message,
        error: false,
      });
      const course = response.data.course;
      const index = courseStore.courses.findIndex(course => course.id === id);
      courseStore.courses[index] = mergeWith(course, customizer_);
      console.log(response.data.course);
      console.log(JSON.stringify(courseStore.courses, null, 6));
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

export {update};
