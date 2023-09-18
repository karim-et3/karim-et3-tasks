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
export type TToast = {
  error: boolean;
  text: string;
  icon: string;
};
export type TAdmin = {
  username: string;
  age: string;
  address: string;
  phone: string;
};
export type TLogin = {username: string; password: string};
