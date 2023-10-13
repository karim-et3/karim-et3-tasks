import {
  NavigationHelpers,
  // NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

// export type Tnavigation = {
//   navigation: NavigationProp<ParamListBase>;
// };
// export type Tnavigation = MaterialTopTabScreenProps<RootTabParamList, 'home'>;

export type TnavigationState = {
  history: [{key: string; type: string}];
  index: number;
  key: string;
  routeNames: [string];
  routes: [{key: string; name: string; params: object | undefined}];
  stale: boolean;
  type: string;
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

export type TDisplaySingleNewsDescriptionExport = {
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
  primary: '#818cf8';
  primary_switch: '#818cf8' | '#ffffff';
  black: '#0f172a' | '#ffffff';
  grey: '#64748b' | '#94a3b8';
  white: '#ffffff' | '#1e293b';
  highlight: '#fafafa' | '#334155';
  error: '#f43f5e';
};

export type TSIZES = {
  xSmall: 10;
  small: 12;
  medium: 16;
  large: 20;
  xLarge: 24;
  xxLarge: 32;
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
  navigationStateIndex: number;
};
export type TFetchError = {
  COLORS: TCOLORS;
};
export type TFetchErrorExport = {};
export type THome = {};
export type TSearch = {
  COLORS: TCOLORS;
};
export type TTheme = {
  SIZES: TSIZES;
  FONTS: TFONTS;
};

export type TNoResultExport = {};

// export type RootTabParamList = {
//   home: undefined;
//   search: undefined;
// };
// export type homeProps = MaterialTopTabScreenProps<RootTabParamList, 'home'> & {
//   navigationIndex: number;
// };
