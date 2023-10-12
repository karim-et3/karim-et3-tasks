import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TCourses} from '../types';
import toastStore from './Toast';
import axios from 'axios';
import {IP, PORT} from '@env';

class Courses {
  courses = observable.array<TCourses>();

  fetchCourses() {
    runInAction(async () => {
      try {
        const result = await axios.get(`http://${IP}:${PORT}/courses`);
        console.log('courses =>', result.data.courses);
        this.setCourses(result.data.courses);
      } catch (error) {
        console.log(errror.response.data);
        toastStore.changeVisiblity({
          message: error.response.data.message,
          error: true,
        });
      }
    });
  }
  get getCourses() {
    return this.courses;
  }
  setCourses(courses: TCourses[]) {
    this.courses.replace(courses);
  }
}
const createCoursesInstance = memoize(() => new Courses());
const coursesStore = createCoursesInstance();
export default coursesStore;
