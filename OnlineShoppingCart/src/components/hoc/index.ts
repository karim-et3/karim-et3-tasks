import {observer as LiteObserver} from 'mobx-react-lite';
import {ComponentType} from 'react';
import {TEt3Theme} from '../et3-theme/';
import compose from '../Recompose';

export type WithLiteObserver = <T extends {}>(
  component: ComponentType<T>,
  defaultProps?: T,
) => ComponentType<T>;

export const withLiteObserver = compose(LiteObserver) as WithLiteObserver;

type WithThemeAndLiteObserver = <T extends {}>(
  component: ComponentType<T & {theme: TEt3Theme}>,
  defaultProps?: T,
) => ComponentType<T & {theme?: TEt3Theme}>;

export const withLiteObserverAndTheme = (component => {
  return compose(LiteObserver)(component);
}) as WithThemeAndLiteObserver;
