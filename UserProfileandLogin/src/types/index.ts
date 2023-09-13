import {NavigationProp, ParamListBase} from '@react-navigation/native';

export type TLoginProp = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  icon: any;
  placeholder: string;
  type: string;
};
export type Tnavigation = {
  navigation: NavigationProp<ParamListBase>;
};
