import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';

export type TCOLORS = {
  primary: string;
  secondary: string;
  white: string;
  black: string;
  error: string;
  grey: string;
  disabledbBackground: string;
  disabledBorder: string;
  disabledText: string;
  border: string;
};
export type TInputAreaProp = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  icon: React.JSX.Element;
  placeholder: string;
  COLORS: TCOLORS;
};
export type Tnavigation = {
  navigation: NavigationProp<ParamListBase>;
};
export type TProduct = {
  description: string;
  id: number;
  image: number;
  price: number;
  quantity: number;
  title: string;
};
export type TaddProd = {
  description: string;
  id: number;
  image: number;
  price: number;
  quantity: number;
  title: string;
};
export type TAddProductToCart = {
  addToCart: () => void;
};
export type TUsernameInput = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  COLORS: TCOLORS;
};
export type TAddressInput = {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  COLORS: TCOLORS;
};
export type TSubmit = Tnavigation & {
  name: string;
  address: string;
  COLORS: TCOLORS;
};
export type TToastContext = {
  error: boolean;
  text: string;
  icon: string;
};
export type TToastNotification = {
  error: boolean;
  text: string;
  icon: string;
  COLORS: TCOLORS;
};

export type TFONTS = {
  regular: any;
  medium: any;
  bold: any;
};

export type TSIZES = {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
};

export type TProductDelete = {
  product: TProduct;
  COLORS: TCOLORS;
};
export type TCartItem = {
  product: TProduct;
  index: number;
};
export type TProductDescription = {
  product: TProduct;
  COLORS: TCOLORS;
  SIZES: TSIZES;
  FONTS: TFONTS;
};
export type TProductImage = {
  image: number;
  COLORS: TCOLORS;
};
