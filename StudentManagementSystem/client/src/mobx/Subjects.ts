import {memoize} from 'lodash';
import {observable} from 'mobx';
import {TSubject} from '../types';

class Subjects {
  subjets = observable.array<TSubject>();
}
const createSubjectsInstance = memoize(
  () => new Subjects(),
  () => 1,
);
const subjectsStore = createSubjectsInstance();
export default subjectsStore;
