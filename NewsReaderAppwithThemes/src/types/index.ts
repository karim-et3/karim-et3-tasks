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
};
export type TTabButton = {
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
  navigation: NavigationHelpers<ParamListBase>;
  navigationStateIndex: number;
};
export type TTabButtonSwitch = {
  navigationStateIndex: number;
};
export type TTabButtonTitle = {
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
export type Tprops = {
  props: React.ReactPropTypes;
};
