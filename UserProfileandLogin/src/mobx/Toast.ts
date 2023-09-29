import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

class Toast {
  showToast = observable.box<boolean>(false);
  temp = observable.box<boolean>(true);
  error = observable.box<boolean>(false);
  icon = observable.box<string>('');
  message = observable.box<string>('');
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
  setIcon(icon: string) {
    runInAction(() => {
      this.icon.set(icon);
    });
  }
  setError(error: boolean) {
    runInAction(() => {
      this.error.set(error);
    });
  }
  setTemp(temp: boolean) {
    runInAction(() => {
      this.temp.set(temp);
    });
  }
  get getShowToast() {
    return this.showToast.get();
  }
  get getTemp() {
    return this.temp.get();
  }
  get getError() {
    return this.error.get();
  }
  get getIcon() {
    return this.icon.get();
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
