import {NavigationProp, ParamListBase} from '@react-navigation/native';

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
