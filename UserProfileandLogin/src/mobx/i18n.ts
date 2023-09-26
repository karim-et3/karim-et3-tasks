import i18next from 'i18next';
import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

class i18nClass {
  isArabic = observable.box<boolean>(true);
  get(text: string) {
    return i18next.t(text);
  }
  get getIsArabic() {
    return this.isArabic.get();
  }
  get getLanguage() {
    return i18next.language;
  }
  setLanguage = (lang: 'ar' | 'en') => {
    runInAction(() => {
      this.isArabic.set(lang === 'ar');
      return i18next.changeLanguage(lang);
    });
  };
}
const createLanguageInstance = memoize(
  () => new i18nClass(),
  () => 1,
);
const i18n = createLanguageInstance();
export default i18n;
// get(text: string) {
//   i18n.get("KEY_NAME");
//     // return i18next.t(text);
// }
