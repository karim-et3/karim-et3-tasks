import {runInAction} from 'mobx';
import courseStore from '.';
import toastStore from '../Toast';
import {mergeWith} from 'lodash';
import {TCourses} from '../../types';
import subjectStore from '../Subject';
import axiosHelper from '../../helpers/axiosHelper';

const setupEdit = (id: number) => {
  runInAction(() => {
    courseStore.setIsLoading(true);
    const index = courseStore.courses.findIndex(course => course.id === id);
    if (index !== -1) {
      const {code, subject_id, duration} = courseStore.courses[index];
      const indexSubjectID = subjectStore.subjects.findIndex(
        sub => sub.id === subject_id,
      );
      const subject = subjectStore.subjects[indexSubjectID].name;
      courseStore.setTempCode(code);
      courseStore.setTempSubject(subject);
      courseStore.setTempDuration(duration);
    }
    courseStore.setIsLoading(false);
  });
};

const read = () => {
  runInAction(async () => {
    courseStore.setIsLoading(true);
    try {
      const response = await axiosHelper({path: 'courses/', method: 'GET'});
      console.log('courses =>', JSON.stringify(response.data.courses, null, 3));
      courseStore.setCourses(response.data.courses);
    } catch (error: any) {
      console.log(error.response.data);
      toastStore.changeVisiblity({
        message: error.response.data.message,
        error: true,
      });
    } finally {
      courseStore.setIsLoading(false);
    }
  });
};
const readSingle = (id: number) => {
  const customizer = ({
    id,
    code,
    subject_id,
    duration,
    created_at,
    updated_at,
  }: TCourses) => {
    const index = subjectStore.subjects.findIndex(sub => sub.id === subject_id);
    const subject = subjectStore.subjects[index].name;
    return {id, code, subject, duration};
  };
  runInAction(() => {
    courseStore.setIsLoading(true);
    const index = courseStore.courses.findIndex(std => std.id === id);
    courseStore.course = mergeWith(courseStore.courses[index], customizer);
    console.log(JSON.stringify(courseStore.course, null, 6));

    courseStore.setIsLoading(false);
  });
};

export {setupEdit, read, readSingle};
