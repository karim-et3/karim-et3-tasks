import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {update} from './update';
import {create} from './create';
import {remove} from './delete';
import {TCourses} from '../../types';
import {read, readSingle, setupEdit} from './read';

class Courses {
  courses = observable.array<TCourses>();
  loading = observable.box<boolean>(false);
  isSubmitButtonDisabled = observable.box<boolean>(false);
  primeLoading = observable.box<boolean>(true);
  refresh = observable.box<boolean>(false);
  get getRefresh() {
    return this.refresh.get();
  }
  course = observable.object({
    id: 0,
    code: '',
    subject: '',
    duration: '',
  });
  code = observable.box<string>('');
  subject = observable.box<string>('');
  duration = observable.box<string>('');
  courseFocus = observable.object({
    code: false,
    subject: false,
    duration: false,
  });

  fetchCourses = () => read();
  fetchCourse = (id: number) => readSingle(id);
  setupEdit = (id: number) => setupEdit(id);
  addCourse = () =>
    create({
      code: this.getTempCode,
      subject: this.getTempSubject,
      duration: this.getTempDuration,
    });
  putCourse = (id: number) =>
    update({
      id,
      code: this.getTempCode,
      subject: this.getTempSubject,
      duration: this.getTempDuration,
    });
  deleteCourse = (id: number) => remove({id});

  resetInput() {
    runInAction(() => {
      this.setTempCode('');
      this.setTempDuration('');
      this.setTempSubject('');

      this.courseFocus.code = false;
      this.courseFocus.subject = false;
      this.courseFocus.duration = false;
    });
  }
  getNumberOfCoursesUnserSameSubject(id: number) {
    return runInAction(() => {
      return this.getCourses.filter(course => course.subjectID === id).length;
    });
  }
  setCourses(courses: TCourses[]) {
    runInAction(() => {
      this.courses.replace(courses);
    });
  }

  setTempCode(code: string) {
    runInAction(() => {
      this.code.set(code);
      this.setIsSubmitButtonDisabled(false);
    });
  }
  setTempSubject(subject: string) {
    runInAction(() => {
      this.subject.set(subject);
      this.setIsSubmitButtonDisabled(false);
    });
  }
  setTempDuration(duration: string) {
    runInAction(() => {
      if (duration) duration = duration.replace(/[^0-9]/g, '');
      this.duration.set(duration);
      this.setIsSubmitButtonDisabled(false);
    });
  }

  setFocusCode = () => {
    runInAction(() => {
      this.courseFocus.code = !this.courseFocus.code;
    });
  };
  setFocusSubject = () => {
    runInAction(() => {
      this.courseFocus.subject = !this.courseFocus.subject;
    });
  };
  setFocusDuration = () => {
    runInAction(() => {
      this.courseFocus.duration = !this.courseFocus.duration;
    });
  };

  setIsLoading(status: boolean) {
    runInAction(() => {
      this.loading.set(status);
    });
  }
  get getIsSubmitButtonDisabled() {
    return this.isSubmitButtonDisabled.get();
  }
  setIsSubmitButtonDisabled(status: boolean) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(status);
    });
  }
  get getCourses() {
    return this.courses;
  }
  get getCode() {
    return this.course.code;
  }
  get getSubject() {
    return this.course.subject;
  }
  get getDuration() {
    return this.course.duration;
  }

  get getTempCode() {
    return this.code.get();
  }
  get getTempSubject() {
    return this.subject.get();
  }
  get getTempDuration() {
    return this.duration.get();
  }

  get getFocusCode() {
    return this.courseFocus.code;
  }
  get getFocusSubject() {
    return this.courseFocus.subject;
  }
  get getFocusDuration() {
    return this.courseFocus.duration;
  }
  get isLoading() {
    return this.loading.get();
  }
  setIsPrimeLoading(status: boolean) {
    runInAction(() => {
      this.primeLoading.set(status);
    });
  }
  get isPrimeLoading() {
    return this.primeLoading.get();
  }
}

const createCourseInstance = memoize(
  () => new Courses(),
  () => 1,
);
const courseStore = createCourseInstance();
export default courseStore;
