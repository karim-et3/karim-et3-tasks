import {runInAction} from 'mobx';
import toastStore from '../Toast';
import courseStore from '.';
import axios from 'axios';
import {IP, PORT} from '@env';
import {navigate} from '../../routes/NavigationRef';
import {TCourse, TCourses} from '../../types';
import {mergeWith} from 'lodash';
import {readSingle} from './read';

const update = ({id, code, subject, duration}: {id: number} & TCourse) => {
  const customizer_ = ({
    id,
    code,
    subject,
    duration,
    created_at,
    updated_at,
  }: TCourses) => {
    return {id, code, subject, duration, created_at, updated_at};
  };
  runInAction(async () => {
    try {
      courseStore.setIsLoading(true);
      const response = await axios.put(
        `http://${IP}:${PORT}/courses/edit/${id}`,
        {
          data: {
            code,
            subject,
            duration,
          },
        },
      );
      toastStore.changeVisiblity({
        message: response.data.message,
        error: false,
      });
      const course = response.data.course;
      const index = courseStore.courses.findIndex(course => course.id === id);
      courseStore.courses[index] = mergeWith(course, customizer_);
      readSingle(id);
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
