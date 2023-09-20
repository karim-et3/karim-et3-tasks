import {NavigationProp, ParamListBase} from '@react-navigation/native';

export type TLoginProp = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  icon: any;
  placeholder: string;
  type: string;
};
export type Tnavigation = {
  setOptions(arg0: {title: string}): unknown;
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
  loggedIn: boolean;
};
export type TLogin = {
  username: string;
  password: string;
};
export type TUsers = {
  firstName: string;
  lastName: string;
  dob: Date;
  image: number;
  id: number;
  online: boolean;
  description: string;
};
export type TUpdateAdmin = {
  username: string;
  age: string;
  address: string;
  phone: string;
};
