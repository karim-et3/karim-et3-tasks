import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {Appearance} from 'react-native';
import {MMKVLoader} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

class Theme {
  light = observable.box<boolean>(this.getPreferedTheme());

  getPreferedTheme() {
    return runInAction(() => {
      const test = MMKV.getString('userTheme');
      if (test) return test === 'light';
      else return Appearance.getColorScheme() === 'light';
    });
  }

  changeTheme = () => {
    runInAction(() => {
      this.light.set(!this.light.get());
      MMKV.setString('userTheme', this.light.get() ? 'light' : 'dark');
    });
  };

  get colors() {
    return {
      primary: '#818cf8',
      primary_switch: this.light.get() ? '#818cf8' : '#ffffff',
      black: this.light.get() ? '#0f172a' : '#ffffff',
      grey: this.light.get() ? '#64748b' : '#94a3b8',
      white: this.light.get() ? '#ffffff' : '#1e293b',
      highlight: this.light.get() ? '#fafafa' : '#334155',
    };
  }
  get theme() {
    return this.light.get();
  }
  logTheme = () => {
    runInAction(() => {
      console.log(this.light);
    });
  };
}

const createThemeInstance = memoize(
  () => new Theme(),
  () => 1,
);
const themeStore = createThemeInstance();
export default themeStore;
