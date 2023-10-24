import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {ParamListBase} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

type TCOLORS = {
  green: string;
  primary: string;
  // primary_faded: string;
  secondary: string;
  // background: string;
  black: string;
  placeholder: string;
  white: string;
  grey: string;
  // disabledbBackground: string;
  // disabledBorder: string;
  // disabledText: string;
  // border: string;
  error: string;
  slate: string;
  // test_primary: string;
  // test_primary1: string;
  // test_primary2: string;
  // test_primary3: string;
  // test_white: string;
  // test_grey: string;
};
type TFONTS = {
  regular: '100' | '200' | '300' | '400';
  medium: '500' | '600';
  bold: '700' | '800' | '900';
};
type TSIZES = {
  xSmall: 10;
  small: 12;
  medium: 16;
  large: 20;
  xLarge: 24;
  xxLarge: 32;
};

type TSHADOWS = {
  small: {
    shadowColor: '#000';
    shadowOffset: {
      width: 0;
      height: 2;
    };
    shadowOpacity: 0.25;
    shadowRadius: 3.84;
    elevation: 2;
  };
  medium: {
    shadowColor: '#000';
    shadowOffset: {
      width: 0;
      height: 2;
    };
    shadowOpacity: 0.25;
    shadowRadius: 5.84;
    elevation: 5;
  };
};

export type TTheme = {
  COLORS: TCOLORS;
  FONTS: TFONTS;
  SIZES: TSIZES;
  SHADOWS: TSHADOWS;
};
export type TApp = {
  COLORS: TCOLORS;
};
export type TRootDrawerNavigation = {
  COLORS: TCOLORS;
  SIZES: TSIZES;
};
export type TCountBox = {
  SIZES: TSIZES;
  COLORS: TCOLORS;
  FONTS: TFONTS;
  SHADOWS: TSHADOWS;
  icon: IconProp;
  count: number;
};
export type TStudentProps = {
  SIZES: TSIZES;
  COLORS: TCOLORS;
  FONTS: TFONTS;
  student: TStudent;
};
export type TStudent = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  address: string;
};
export type TStudents = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  address: string;
  created_at: Date;
  updated_at: Date;
};

export type TStudentFocus = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phoneNumber: boolean;
  dateOfBirth: boolean;
  address: boolean;
};

export type TInputField = {
  blurRef?: any;
  COLORS: TCOLORS;
  icon: IconProp;
  placeholder: string;
  value: string;
  setValue: (e: string) => void;
  focus: boolean;
  setFocus: () => void;
  required: boolean;
};
export type TInputFieldExport = {
  blurRef?: any;
  icon: IconProp;
  placeholder: string;
  value: string;
  setValue: (e: string) => void;
  focus: boolean;
  setFocus: () => void;
  required?: boolean;
};
export type TToast = {
  error: boolean;
  message: string;
  // icon: IconProp;
};
export type TToastProps = {
  error: boolean;
  message: string;
  // icon: IconProp;
  COLORS: TCOLORS;
  SHADOWS: TSHADOWS;
};
export type TEmptyList = {
  COLORS: TCOLORS;
  SIZES: TSIZES;
  FONTS: TFONTS;
};
export type TStudentDetails = {
  navigation: StackScreenProps<ParamListBase>;
  route: {params: {id: number}};
  COLORS: TCOLORS;
  SIZES: TSIZES;
  FONTS: TFONTS;
  SHADOWS: TSHADOWS;
};
export type TLoading = {
  COLORS: TCOLORS;
};
export type TStudentDetailsBox = {
  COLORS: TCOLORS;
  SIZES: TSIZES;
  icon: IconProp;
  data: string;
};
export type TButton = {
  text: string;
  textColor: string;
  backgroundColor: string;
  onPress: () => void;
  shadow?: 'small' | 'medium';
  disabled?: boolean;
  SIZES: TSIZES;
  FONTS: TFONTS;
  SHADOWS: TSHADOWS;
};
export type TCourses = {
  id: number;
  code: string;
  subject_id: number;
  duration: string;
  created_at: Date;
  updated_at: Date;
};
export type TCourse = {
  code: string;
  subject: string;
  duration: string;
};
export type TGrades = {
  course_id: number;
  student_id: number;
  grade?: number;
};
export type TSubjects = {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
};
export type TSubject = {
  name: string;
};
