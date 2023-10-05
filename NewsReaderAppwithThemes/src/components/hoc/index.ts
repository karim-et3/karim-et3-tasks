import compose from './Recompose';
import CustomTheme from './CustomTheme';
import {observer as LiteObserver} from 'mobx-react-lite';
import {ComponentType} from 'react';
import {TCOLORS} from '../../types';

export type WithLiteObserver = <T extends {}>(
  component: ComponentType<T>,
  defaultProps?: T,
) => ComponentType<T>;

export const withLiteObserver = compose(LiteObserver) as WithLiteObserver;

type WithThemeAndLiteObserver = <T extends {}>(
  component: ComponentType<T & {theme: TCOLORS}>,
  defaultProps?: T,
) => ComponentType<T & {theme?: TCOLORS}>;

export const WithThemeAndLiteObserver = (component => {
  return compose(CustomTheme, LiteObserver)(component);
}) as WithThemeAndLiteObserver;
