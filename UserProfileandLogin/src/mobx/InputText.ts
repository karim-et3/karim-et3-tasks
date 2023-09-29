import {memoize} from 'lodash';
import {runInAction} from 'mobx';

class InputText {
  focused = false;
  setFocused(status: boolean) {
    runInAction(() => {
      this.focused = status;
    });
  }
}

const createInputTextInstance = memoize(
  () => new InputText(),
  () => 1,
);
const inputTextStore = createInputTextInstance();
export default inputTextStore;
