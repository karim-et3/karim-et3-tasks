import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export type TsetString = React.Dispatch<React.SetStateAction<string>>;

export type TInputText = {
  COLORS: TCOLORS;
  setValue: (text: string) => void;
  value: string;
  icon: any;
  placeholder: string;
  type: string;
};
export type TInputTextExport = {
  setValue: (text: string) => void;
  value: string;
  icon: any;
  placeholder: string;
  type?: string;
};
export type UserDetailsParamsList = {
  'user-details': {id: number};
};
export type TUserDetails = {
  navigation: Tnavigation;
  route: RouteProp<UserDetailsParamsList, 'user-details'>;
  COLORS: TCOLORS;
};
export type Tnavigation = {
  navigate(arg0: string): void;
  navigation: NavigationProp<ParamListBase>;
  setOptions(arg0: {title: string}): unknown;
};
export type TToast = {
  error: boolean;
  message: string;
  icon: string;
};
export type TAdmin = {
  username: string;
  age: string;
  address: string;
  phone: string;
  loggedIn: boolean;
};
export type TLoginInput = {
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
  regular: '400';
  medium: '500';
  bold: '700';
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

export type TDeleteUserExport = {
  user: TUsers;
};

export type TDeleteUserDescription = {
  user: TUsers;
  COLORS: TCOLORS;
  SIZES: TSIZES;
  FONTS: TFONTS;
};

export type TDeleteUserDescriptionExport = {
  user: TUsers;
};
export type TDisplayDeleteUser = {
  SIZES: TSIZES;
};
export type TDisplayDeleteUserExport = {};

export type TNoUsers = {
  COLORS: TCOLORS;
  SIZES: TSIZES;
  FONTS: TFONTS;
};
export type TNoUsersExport = {};

export type TLanguageSwitch = {
  COLORS: TCOLORS;
};
export type TDeleteUserButton = {
  COLORS: TCOLORS;
  SIZES: TSIZES;
  id: number;
};
export type TDeleteUserButtonExport = {
  id: number;
};
export type TEditProfile = {
  COLORS: TCOLORS;
  navigation: Tnavigation;
};
export type TDisplayUser = {
  COLORS: TCOLORS;
  FONTS: TFONTS;
  SIZES: TSIZES;
  user: TUsers;
};
export type TDisplayUserExport = {
  user: TUsers;
};
export type THome = {
  navigation: Tnavigation;
};
export type THomeText = {
  COLORS: TCOLORS;
  username: string;
};
export type THomeTextExport = {
  // COLORS: TCOLORS;
  username: string;
};
export type TListDeleteUser = {
  COLORS: TCOLORS;
  FONTS: TFONTS;
  SIZES: TSIZES;
};
export type TLogin = {
  navigation: Tnavigation;
  COLORS: TCOLORS;
};
export type THomeEditProfileButton = {
  COLORS: TCOLORS;
  navigation: Tnavigation;
};
export type THomeEditProfileButtonExport = {
  // COLORS: TCOLORS;
  navigation: Tnavigation;
};

export type TRootDrawerNavigation = {
  COLORS: TCOLORS;
  SIZES: TSIZES;
  FONTS: TFONTS;
  navigation: Tnavigation;
};
export type TLanguageSwitchText = {
  COLORS: TCOLORS;
  SIZES: TSIZES;
  FONTS: TFONTS;
};
export type TLanguageSwitchSwitch = {
  COLORS: TCOLORS;
};
export type TLoading = {COLORS: TCOLORS};
export type TLoadingExport = {};
