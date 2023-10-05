import {memoize} from 'lodash';
class Theme {
  colors = {
    primary: '#22c55e',
    primary_faded: '#22c55e66',
    secondary: '#a1a1aa',
    background: '#fafafa',
    black: '#262626',
    placeholder: '#a8a29e',
    white: '#f5f5f5',
    grey: '#d1d5db',
    disabledbBackground: '#d4d4d4',
    disabledBorder: '#a3a3a3',
    disabledText: '#e7e5e4',
    border: '#0066cc',
    error: '#f43f5e',
    test_primary: '#29a54d',
    test_primary1: '#2f8147',
    test_primary2: '#355e41',
    test_primary3: '#3b3b3b',
    test_white: '#f9f9f9',
    test_grey: '#cbd5e1',
  };
}

const createThemeInstance = memoize(
  () => new Theme(),
  () => 1,
);
const themeStore = createThemeInstance();
export default themeStore;
