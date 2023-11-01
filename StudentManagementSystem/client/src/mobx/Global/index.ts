import {memoize} from 'lodash';
import subjectStore from './../Subject';
import courseStore from './../Course';
import studentStore from './../Student';

class Global {
  get isAppReady() {
    return (
      !subjectStore.isPrimeLoading &&
      !courseStore.isPrimeLoading &&
      !studentStore.isPrimeLoading
    );
  }
}
const createGlobalInstance = memoize(() => new Global());
const globalStore = createGlobalInstance();
export default globalStore;
