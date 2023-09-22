import {t} from 'i18next';
import {memoize} from 'lodash';

class Language {
  translate(text: string) {
    return t(text);
  }
}
const createLanguageInstance = memoize(
  () => new Language(),
  () => 1,
);
const langaugeStore = createLanguageInstance();
export default langaugeStore;
