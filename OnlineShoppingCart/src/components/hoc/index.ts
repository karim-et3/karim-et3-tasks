import {observer as LiteObserver} from 'mobx-react-lite';
import {ComponentType} from 'react';
import CustomColors from './CustomColors';
import compose from './Recompose';
import {TCOLORS} from '../../types';

type WithLiteObserver = <T extends {}>(
  component: ComponentType<T>,
  defaultProps?: T,
) => ComponentType<T>;

export const withLiteObserver = compose(LiteObserver) as WithLiteObserver;

type WithThemeAndLiteObserver = <T extends {}>(
  component: ComponentType<T & {theme: TCOLORS}>,
  defaultProps?: T,
) => ComponentType<T & {theme?: TCOLORS}>;

export const withLiteObserverAndTheme = (component => {
  return compose(CustomColors, LiteObserver)(component);
}) as WithThemeAndLiteObserver;
