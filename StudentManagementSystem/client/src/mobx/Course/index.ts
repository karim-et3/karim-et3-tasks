import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {update} from './update';
import {create} from './create';
import {remove} from './delete';
import {TCourses} from '../../types';
import {read, readSingle, setupEdit} from './read';

class Courses {
  courses = observable.array<TCourses>();
  course = observable.map({
    id: 0,
    code: '',
    subject: '',
    duration: '',
  });
  tempCourse = observable.object({
    id: 0,
    code: '',
    subject: '',
    duration: '',
  });
  focusCode = observable.box<boolean>(false);
  focusSubject = observable.box<boolean>(false);
  focusDuration = observable.box<boolean>(false);
  loading = observable.box<boolean>(false);

  fetchCourses = () => read();
  fetchCourse = (id: number) => readSingle(id);
  setupEdit = (id: number) => setupEdit(id);
  postCourse = () => create(this.tempCourse);
  putCourse = () => update(this.tempCourse);
  deleteCourse = (id: number) => remove({id});

  resetInput() {
    runInAction(() => {
      this.setTempCode('');
      this.setTempDuration('');
      this.setTempSubject('');

      this.focusDuration.set(false);
      this.focusCode.set(false);
      this.focusSubject.set(false);
    });
  }

  setCourses(courses: TCourses[]) {
    runInAction(() => {
      this.courses.replace(courses);
    });
  }

  setTempCode(code: string) {
    runInAction(() => {
      this.tempCourse.code = code;
    });
  }
  setTempSubject(subject: string) {
    runInAction(() => {
      this.tempCourse.subject = subject;
    });
  }
  setTempDuration(duration: string) {
    runInAction(() => {
      duration = duration.replace(/[^0-9]/g, '');
      this.tempCourse.duration = duration;
    });
  }
  setFocusCode = () => {
    runInAction(() => {
      this.focusCode.set(!this.focusCode.get());
    });
  };
  setFocusSubject = () => {
    runInAction(() => {
      this.focusSubject.set(!this.focusSubject.get());
    });
  };
  setFocusDuration = () => {
    runInAction(() => {
      this.focusDuration.set(!this.focusDuration.get());
    });
  };
  setIsLoading(status: boolean) {
    runInAction(() => {
      this.loading.set(status);
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
    return this.tempCourse.code;
  }
  get getTempSubject() {
    return this.tempCourse.subject;
  }
  get getTempDuration() {
    return this.tempCourse.duration;
  }
  get getFocusCode() {
    return this.focusCode.get();
  }
  get getFocusSubject() {
    return this.focusSubject.get();
  }
  get getFocusDuration() {
    return this.focusDuration.get();
  }
  get isLoading() {
    return this.loading.get();
  }
}

const createCourseInstance = memoize(
  () => new Courses(),
  () => 1,
);
const courseStore = createCourseInstance();
export default courseStore;
