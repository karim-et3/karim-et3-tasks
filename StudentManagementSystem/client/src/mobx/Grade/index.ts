import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TGrades} from '../../types';
import {readSingle} from './read';
import {updateCoursesChecked} from './update';

class Grade {
  grades = observable.array<TGrades>();
  coursesChecked = observable.array<number>();
  loading = observable.box<boolean>(false);

  fetchGradesForStudent = (id: number) => readSingle(id);
  postCoursesChecked = (id: number) => updateCoursesChecked(id);

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
  setIsLoading(status: boolean) {
    runInAction(() => {
      this.loading.set(status);
    });
  }
  get getGrades() {
    return this.grades;
  }
  get getCoursesChecked() {
    return this.coursesChecked;
  }
  get isLoading() {
    return this.loading.get();
  }
}
const createGradeInstance = memoize(
  () => new Grade(),
  () => 1,
);
const gradeStore = createGradeInstance();
export default gradeStore;
