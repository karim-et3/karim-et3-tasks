import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export type TLoginProp = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  icon: any;
  placeholder: string;
  type: string;
};
export type UserDetailsParamsList = {
  'user-details': {id: number};
};
export type TUserDetails = {
  navigation: Tnavigation;
  route: RouteProp<UserDetailsParamsList, 'user-details'>;
};
export type Tnavigation = {
  navigate(arg0: string): void;
  navigation: NavigationProp<ParamListBase>;
  setOptions(arg0: {title: string}): unknown;
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
  id: number;
  firstName: string;
  lastName: string;
  image: number;
  dob: Date;
  online: boolean;
  description: string;
};
export type TUpdateAdmin = {
  username: string;
  age: string;
  address: string;
  phone: string;
};
export type TUserDetailsModal = {
  firstName: string;
  lastName: string;
  image: number;
  id: number;
  description: string;
};
export type Tprops = {
  props: React.ReactPropTypes;
};
export type TCOLORS = {
  primary: string;
  primary_faded: string;
  secondary: string;
  background: string;
  black: string;
  placeholder: string;
  white: string;
  grey: string;
  disabledbBackground: string;
  disabledBorder: string;
  disabledText: string;
  border: string;
  error: string;
  test_primary: string;
  test_primary1: string;
  test_primary2: string;
  test_primary3: string;
  test_white: string;
  test_grey: string;
};
export type TSIZES = {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
};

export type TFONTS = {
  regular: string;
  medium: string;
  bold: string;
};

export type TSHADOWS = {
  small: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  medium: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
};

export type TDeleteUser = {
  SIZES: TSIZES;
  SHADOWS: TSHADOWS;
  user: TUsers;
};

export type TDeleteUserDescription = {
  user: TUsers;
  COLORS: TCOLORS;
  SIZES: TSIZES;
  FONTS: TFONTS;
};
export type TLanguageSwitch = {
  COLORS: TCOLORS;
  SIZES: TSIZES;
  FONTS: TFONTS;
};
