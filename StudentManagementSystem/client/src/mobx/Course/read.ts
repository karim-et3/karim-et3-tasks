import {runInAction} from 'mobx';
import courseStore from '.';
import toastStore from '../Toast';
import {IP, PORT} from '@env';
import axios from 'axios';
import {cloneDeep, cloneWith, merge} from 'lodash';
import {TCourses} from '../../types';
const setupEdit = (id: number) => {
  runInAction(() => {
    courseStore.setIsLoading(true);
    const index = courseStore.courses.findIndex(course => course.id === id);
    courseStore.tempCourse = merge(courseStore.courses[index]);
    // console.log(courseStore.tempCourse);
    // console.log(courseStore.courses[index]);
    // courseStore.tempCourse = Object.assign({}, courseStore.courses[index]);
    // courseStore.tempCourse.code = 'after edit';
    // console.log(courseStore.courses[index]);
    // console.log(courseStore.tempCourse);
    // console.log(courseStore.courses);
    courseStore.setIsLoading(false);
  });
};

const read = () => {
  runInAction(async () => {
    courseStore.setIsLoading(true);
    try {
      const result = await axios.get(`http://${IP}:${PORT}/courses`);
      console.log('courses =>', JSON.stringify(result.data.courses, null, 3));
      courseStore.setCourses(result.data.courses);
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
    subject,
    duration,
    created_at,
    updated_at,
  }: TCourses) => {
    return {id, code, subject, duration};
  };
  runInAction(() => {
    courseStore.setIsLoading(true);
    const index = courseStore.courses.findIndex(std => std.id === id);
    courseStore.course = cloneWith(courseStore.courses[index], customizer);
    console.log(JSON.stringify(courseStore.course, null, 6));

    courseStore.setIsLoading(false);
  });
};

export {setupEdit, read, readSingle};
