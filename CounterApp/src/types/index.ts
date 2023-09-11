import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface TsetCounter {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
export interface Tnavigation {
  navigation: NavigationProp<ParamListBase>;
}

export type TButtonProps = TsetCounter & {
  type: 'increase' | 'decrease';
};
