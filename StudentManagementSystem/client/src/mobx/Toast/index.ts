import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TToast} from '../../types';

class Toast {
  showToast = observable.box<boolean>(false);
  error = observable.box<boolean>(false);
  message = observable.box<string>('message');

  changeVisiblity({message, error}: TToast) {
    runInAction(() => {
      toastStore.setMessage(message);
      toastStore.setError(error);
      toastStore.setShowToast(true);
      const timer = setTimeout(() => {
        toastStore.setShowToast(false);
      }, 1500);
      return () => clearTimeout(timer);
    });
  }

  setShowToast(status: boolean) {
    runInAction(() => {
      this.showToast.set(status);
    });
  }
  setMessage(message: string) {
    runInAction(() => {
      this.message.set(message);
    });
  }
  setError(error: boolean) {
    runInAction(() => {
      this.error.set(error);
    });
  }
  get show() {
    return this.showToast.get();
  }
  get getError() {
    return this.error.get();
  }
  get getMessage() {
    return this.message.get();
  }
}
const createToastInstance = memoize(
  () => new Toast(),
  () => 1,
);
const toastStore = createToastInstance();
export default toastStore;
