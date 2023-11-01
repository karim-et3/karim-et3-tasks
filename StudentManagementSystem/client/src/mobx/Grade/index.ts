import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TGrades} from '../../types';
import {readSingle} from './read';
import {updateCoursesChecked} from './update';
import courseStore from '../Course';
import {create} from './create';

class Grade {
  grades = observable.array<TGrades>();
  coursesChecked = observable.array<number>();
  coursesCheckedNames = observable.array<string>();
  loading = observable.box<boolean>(false);
  tempCourse = observable.box<string>('');
  tempGrade = observable.box<number>(0);
  focusGrade = observable.box<boolean>(false);
  isSubmitButtonDisabled = observable.box<boolean>(false);

  fetchGradesForStudent = (id: number) => readSingle(id);
  postCoursesChecked = (id: number) => updateCoursesChecked(id);
  postGrade = (id: number) =>
    create({
      grade: this.getTempGrade,
      course: this.getTempCourse,
      studentID: id,
    });
  resetInput = () => {
    runInAction(() => {
      this.setTempGrade('0');
      this.setIsSubmitButtonDisabled(false);
    });
  };
  setIsSubmitButtonDisabled(status: boolean) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(status);
    });
  }
  get getIsSubmitButtonDisabled() {
    return this.isSubmitButtonDisabled.get();
  }
  setTempCourse = (course: string) => {
    runInAction(() => {
      this.tempCourse.set(course);
      const id = courseStore.courses.find(c => c.code === course)?.id;
      const grade =
        this.getGrades.find(grade => grade.courseID === id)?.grade ?? 0;
      this.setIsSubmitButtonDisabled(false);
      this.setTempGrade(grade.toString());
    });
  };
  setTempGrade = (grade: string) => {
    runInAction(() => {
      if (grade) {
        grade = grade.replace(/[^0-9]/g, '');
        if (parseInt(grade) <= 100) this.tempGrade.set(parseInt(grade));
      } else this.tempGrade.set(0);
    });
  };
  get getTempCourse() {
    return this.tempCourse.get();
  }
  get getTempGrade() {
    return this.tempGrade.get();
  }

  setGrades(grades: TGrades[]) {
    runInAction(() => {
      this.getGrades.replace(grades);
    });
  }
  // setCoursesCheckedNames() {
  //   runInAction(async () => {
  //     this.coursesCheckedNames.replace(
  //       courseStore.courses.map(course =>
  //         this.getCoursesChecked.includes(course.id) ? course.code : 'no data',
  //       ),
  //     );
  //   });
  //   console.log(this.getCoursesChecked);
  //   console.log(courseStore.courses);
  // }
  get getCoursesCheckedNames() {
    return courseStore.courses
      .filter(course => this.getCoursesChecked.includes(course.id))
      .map(course => course.code);
  }
  setCoursesChecked() {
    runInAction(async () => {
      this.coursesChecked.replace(this.grades.map(grade => grade.courseID));
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
  get getFocusGrade() {
    return this.focusGrade.get();
  }
  setFocusGrade() {
    runInAction(() => {
      this.focusGrade.set(!this.getFocusGrade);
    });
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
