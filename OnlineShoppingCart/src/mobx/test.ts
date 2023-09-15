import memoize from 'lodash/memoize';
import {observable, runInAction} from 'mobx';

class GlobalStore {
  firstInboxSidedLoaded = observable.box<number>(0);

  setFirstInboxSidedLoaded = (firstInboxSidedLoaded: number) => {
    runInAction(() => {
      this.firstInboxSidedLoaded.set(firstInboxSidedLoaded);
    });
  };

  restartAndRemoveAccessApp = async () => {};

  setInProfile = (inProfile: boolean) => {
    runInAction(() => {
      this.isInProfile.set(inProfile);
    });
  };
}

export const getGlobalStore = memoize(
  () => {
    return new GlobalStore();
  },
  () => 1,
);
export default getGlobalStore;
