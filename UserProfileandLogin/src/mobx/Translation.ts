import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {languageResources} from '../constants';

class Translation {
  language = observable.box<string>('ENG');

  get(text: string): string {
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
  () => new Translation(),
  () => 1,
);
const translationStore = createTranslationInstance();
export default translationStore;
