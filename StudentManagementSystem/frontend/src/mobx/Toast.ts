import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TToast} from '../types';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

class Toast {
  showToast = observable.box<boolean>(false);
  //   temp = observable.box<boolean>(true);
  error = observable.box<boolean>(false);
  //   icon = observable.box<IconProp>('user');
  message = observable.box<string>('message');

  changeVisiblity({message, error}: TToast) {
    toastStore.setMessage(message);
    // toastStore.setIcon(icon);
    toastStore.setError(error);
    // toastStore.setTemp(true);
    toastStore.setShowToast(true);
    const timer = setTimeout(() => {
      toastStore.setShowToast(false);
    }, 1500);
    return () => clearTimeout(timer);
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
  //   setIcon(icon: IconProp) {
  //     runInAction(() => {
  //       this.icon.set(icon);
  //     });
  //   }
  setError(error: boolean) {
    runInAction(() => {
      this.error.set(error);
    });
  }
  //   setTemp(temp: boolean) {
  //     runInAction(() => {
  //       this.temp.set(temp);
  //     });
  //   }
  get show() {
    return this.showToast.get();
  }
  //   get getTemp() {
  //     return this.temp.get();
  //   }
  get getError() {
    return this.error.get();
  }
  //   get getIcon() {
  //     return this.icon.get();
  //   }
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
