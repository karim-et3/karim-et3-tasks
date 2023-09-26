import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {languageResources} from '../constants';

class Transaltion {
  language = observable.box<string>('ENG');

  get(text: string) {
    return languageResources[this.language.get()][text];
  }
  setLanguage(lang: 'AR' | 'ENG') {
    runInAction(() => {
      this.language.set(lang);
    });
  }

  get isArabic() {
    return this.language.get() === 'AR';
  }
  get isEnglish() {
    return this.language.get() === 'ENG';
  }
}
const createTranslationInstance = memoize(
  () => new Transaltion(),
  () => 1,
);
const transaltionStore = createTranslationInstance();
export default transaltionStore;
