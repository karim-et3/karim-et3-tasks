import {memoize} from 'lodash';
import {observable} from 'mobx';
import {BackHandler, Platform, ToastAndroid} from 'react-native';

class Global {
  backPressCount = observable.box<number>(0);

  handleBackPress = () => {
    if (this.backPressCount.get() === 0) {
      this.backPressCount.set(this.backPressCount.get() + 1);
      setTimeout(() => this.backPressCount.set(0), 2000);
      ToastAndroid.show('Press one more time to exit', ToastAndroid.SHORT);
    } else if (this.backPressCount.get() === 1) {
      BackHandler.exitApp();
    }
    return true;
  };

  backPress = (press: () => boolean) => {
    // const navIndex = useNavigationState(s => s.index);
    const navIndex = 0;
    if (Platform.OS === 'android' && navIndex === 0) {
      const backListener = BackHandler.addEventListener(
        'hardwareBackPress',
        press,
      );
      return backListener.remove;
    }
  };
}
const createGlobalInstance = memoize(
  () => new Global(),
  () => 1,
);
const globalStore = createGlobalInstance();
export default globalStore;
