import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';

export type TInputAreaProp = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  icon: React.JSX.Element;
  placeholder: string;
};
export type Tnavigation = {
  navigation: NavigationProp<ParamListBase>;
};
export type TProduct = {
  product: {
    description: string;
    id: number;
    image: number;
    price: number;
    quantity: number;
    title: string;
  };
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
