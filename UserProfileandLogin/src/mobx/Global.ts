import {memoize} from 'lodash';
import {observable} from 'mobx';
import {BackHandler, Platform, ToastAndroid} from 'react-native';
import adminStore from './Admin';

class Global {
  backPressCount = observable.box<number>(0);

  doubleTaptoExitApp = () => {
    if (this.backPressCount.get() === 0) {
      this.backPressCount.set(this.backPressCount.get() + 1);
      setTimeout(() => this.backPressCount.set(0), 2000);
      ToastAndroid.show('Press one more time to exit', ToastAndroid.SHORT);
    } else if (this.backPressCount.get() === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  unsaveChanges = () => {
    adminStore.clear();
    return true;
  };
  backPress = (press: () => boolean, navIndex?: number) => {
    console.log(navIndex);
    if (Platform.OS === 'android' && navIndex === 0) {
      const backListener = BackHandler.addEventListener(
        'hardwareBackPress',
        press,
      );
      return backListener.remove;
    }
    return;
  };
}
const createGlobalInstance = memoize(
  () => new Global(),
  () => 1,
);
const globalStore = createGlobalInstance();
export default globalStore;
