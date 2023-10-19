import {memoize} from 'lodash';
class Theme {}

const createThemeInstance = memoize(
  () => new Theme(),
  () => 1,
);
const themeStore = createThemeInstance();
export default themeStore;
