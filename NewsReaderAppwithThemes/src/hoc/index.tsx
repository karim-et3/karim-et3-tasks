import compose from './Recompose';
import CustomTheme from './CustomTheme';
import {observer as LiteObserver} from 'mobx-react-lite';
import {ComponentType} from 'react';
import {TTheme} from '../types';

export type WithLiteObserver = <T extends {}>(
  component: ComponentType<T>,
  defaultProps?: T,
) => ComponentType<T>;

export const withLiteObserver = compose(LiteObserver) as WithLiteObserver;

type WithThemeAndLiteObserver = <T extends {}>(
  component: ComponentType<T & {theme: TTheme}>,
  defaultProps?: T,
) => ComponentType<T & {theme?: TTheme}>;

export const WithThemeAndLiteObserver = (component => {
  return compose(CustomTheme, LiteObserver)(component);
}) as WithThemeAndLiteObserver;
// return test1(test2(component));
// return CustomTheme(LiteObserver(component));
// return LiteObserver(CustomTheme(component));

// export const test1 = component => {
//   return LiteObserver(component);
// };

// export const test2 = component => {
//   return CustomTheme(component);
// };
