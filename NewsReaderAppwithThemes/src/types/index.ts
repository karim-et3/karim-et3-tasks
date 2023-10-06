import {
  NavigationHelpers,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

export type Tnavigation = {
  navigation: NavigationProp<ParamListBase>;
};
export type Tnews = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
export type TDisplaySingleNews = {news: Tnews};
export type TDisplaySingleNewsDescription = {
  news: Tnews;
  SIZES: TSIZES;
  // COLORS: TCOLORS;
};
export type TDisplaySingleNewsDescriptionExport = {
  news: Tnews;
};
export type TTabButton = {
  // COLORS: TCOLORS;
  onPress: () => void;
  navigationStateIndex: number;
  index?: number;
  type?: string;
  title?: string;
};
export type THomeTab = {
  navigation: NavigationHelpers<ParamListBase>;
  navigationStateIndex: number;
};

export type TSearchTab = {
  navigation: NavigationHelpers<ParamListBase>;
  navigationStateIndex: number;
};
export type TSwitchThemeTab = {
  navigationStateIndex: number;
};
export type TCustomNavigationTab = {
  // COLORS: TCOLORS;
  navigation: NavigationHelpers<ParamListBase>;
  navigationStateIndex: number;
};
export type TTabButtonTitle = {
  // COLORS: TCOLORS;
  navigationStateIndex: number;
  index?: number;
  title?: string;
};
export type TImageModal = {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  imageURL: string;
};
export type TDisplaySingleNewsImage = {
  imageURL: string;
};
export type TCOLORS = {
  primary: string;
  primary_switch: string;
  black: string;
  grey: string;
  white: string;
  highlight: string;
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
export type Tprops = {
  props: React.ReactPropTypes;
};
export type TTabButtonSwitch = {
  // COLORS: TCOLORS;
  // isLight: boolean;
  navigationStateIndex: number;
};
export type TFetchError = {
  COLORS: TCOLORS;
};
export type TFetchErrorExport = {};
export type THome = {
  // isLight: boolean;
  // COLORS: TCOLORS;
};
export type TSearch = {
  COLORS: TCOLORS;
};
export type TTheme = {
  SIZES: TSIZES;
  FONTS: TFONTS;
};
