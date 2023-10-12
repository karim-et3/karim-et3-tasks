import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TGrades} from '../types';
import axios from 'axios';
import {IP, PORT} from '@env';
import toastStore from './Toast';
import studentDetailsStore from './StudentDetails';
import {navigate} from '../routes/NavigationRef';

class Grades {
  grades = observable.array<TGrades>();
  coursesChecked = observable.array<number>();

  async getGradesForStudent(id: number) {
    await runInAction(async () => {
      try {
        const result = await axios.get(
          `http://${IP}:${PORT}/grades/?student_id=${id}`,
        );
        console.log('grades =>', result.data.result);
        this.setGrades(result.data.result);
        this.setCoursesCheked();
      } catch (error) {
        console.log(JSON.stringify(error.response.data, null, 3));
        toastStore.changeVisiblity({
          message: error.response.data.message,
          error: true,
        });
      }
    });
  }
  async postCoursesChecked() {
    try {
      const result = await axios.post(
        `http://${IP}:${PORT}/grades/edit-courses`,
        {id: studentDetailsStore.id, coursesCheked: this.getCoursesChecked},
      );
      toastStore.changeVisiblity({message: result.data.message, error: false});
      navigate('student-details', {params: {id: studentDetailsStore.id}});
      this.getGradesForStudent(studentDetailsStore.id);
    } catch (error: Error) {
      console.log(JSON.stringify(error.response.data, null, 3));
      toastStore.changeVisiblity({
        message: error.response.data.message,
        error: true,
      });
    }
  }
  get getGrades() {
    return this.grades;
  }
  setGrades(grades: TGrades[]) {
    runInAction(() => {
      this.getGrades.replace(grades);
    });
  }
  setCoursesCheked() {
    runInAction(async () => {
      this.coursesChecked.replace(this.grades.map(grade => grade.course_id));
    });
  }

  get getCoursesChecked() {
    return this.coursesChecked;
  }
  addCoursesChecked(id: number) {
    runInAction(() => {
      this.coursesChecked.push(id);
    });
  }
  removeCoursesChecked(id: number) {
    runInAction(() => {
      this.coursesChecked.remove(id);
    });
  }
}
const createGradesInstance = memoize(
  () => new Grades(),
  () => 1,
);
const gradesStore = createGradesInstance();
export default gradesStore;
