import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

class Modal {
  openStudentDelete = observable.box<boolean>(false);
  openCourseDelete = observable.box<boolean>(false);
  openSubjectDelete = observable.box<boolean>(false);

  setIsOpenStudentDelete() {
    runInAction(() => {
      this.openStudentDelete.set(!this.isOpenStudentDelete);
    });
  }
  get isOpenStudentDelete() {
    return this.openStudentDelete.get();
  }

  setIsOpenCourseDelete() {
    runInAction(() => {
      this.openCourseDelete.set(!this.isOpenCourseDelete);
    });
  }
  get isOpenCourseDelete() {
    return this.openCourseDelete.get();
  }

  setIsOpenSubjectDelete() {
    runInAction(() => {
      this.openSubjectDelete.set(!this.isOpenSubjectDelete);
    });
  }
  get isOpenSubjectDelete() {
    return this.openSubjectDelete.get();
  }
}
const createModalInstance = memoize(
  () => new Modal(),
  () => 1,
);
const modalStore = createModalInstance();
export default modalStore;
