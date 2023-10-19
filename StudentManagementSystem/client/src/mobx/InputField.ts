import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

class InputField {
  focused = observable.box<boolean>(false);

  setFocus() {
    runInAction(() => {
      this.focused.set(!this.focused.get());
    });
  }
  get focus() {
    return this.focused.get();
  }
}
const createInputFiledInstance = memoize(() => new InputField());
const inputFiledStore = createInputFiledInstance();
export default inputFiledStore;
