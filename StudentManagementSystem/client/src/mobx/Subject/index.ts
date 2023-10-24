import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TSubjects} from '../../types';
import {read, setupEdit} from './read';
import {create} from './create';
import {update} from './update';
import {remove} from './delete';

class Subject {
  subjects = observable.array<TSubjects>();
  loading = observable.box<boolean>(false);
  tempName = observable.box<string>('');
  focusName = observable.box<boolean>(false);
  submitButtonDisabled = observable.box<boolean>(false);

  fetchSubjects = () => read();
  addSubject = () => create({name: this.getTempName});
  setupEdit = ({id}: {id: number}) => setupEdit({id});
  putSubject = ({id}: {id: number}) => update({id, name: this.getTempName});
  deleteSubject = ({id}: {id: number}) => remove({id});

  resetInput() {
    runInAction(() => {
      this.setTempName('');
      this.focusName.set(false);
    });
  }

  setSubjects(subjects: Array<TSubjects>) {
    runInAction(() => {
      this.subjects.replace(subjects);
    });
  }

  get getTempName() {
    return this.tempName.get();
  }
  setTempName(name: string) {
    runInAction(() => {
      this.setIsSubmitButtonDisabled(false);
      this.tempName.set(name);
    });
  }

  get getFocusName() {
    return this.focusName.get();
  }
  setFocusName() {
    runInAction(() => {
      this.focusName.set(!this.getFocusName);
    });
  }
  get isSubmitButtonDisabled() {
    return this.submitButtonDisabled.get();
  }
  setIsSubmitButtonDisabled(status: boolean) {
    runInAction(() => {
      this.submitButtonDisabled.set(status);
    });
  }
  get isLoading() {
    return this.loading.get();
  }
  setIsLoading(status: boolean) {
    console.log('in isloading');
    runInAction(() => {
      this.loading.set(status);
    });
  }
}
const createSubjectInstance = memoize(
  () => new Subject(),
  () => 1,
);
const subjectStore = createSubjectInstance();
export default subjectStore;
