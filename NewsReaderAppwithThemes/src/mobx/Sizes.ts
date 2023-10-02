import {memoize} from 'lodash';

class Sizes {
  xSmall = 10;
  small = 12;
  medium = 16;
  large = 20;
  xLarge = 24;
  xxLarge = 32;
}
const createSizesInstance = memoize(
  () => new Sizes(),
  () => 1,
);
const sizesStore = createSizesInstance();
export default sizesStore;
