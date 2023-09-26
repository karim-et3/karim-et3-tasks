import compose from './Recompose';
import CustomTheme from '../theme';
import {observer as LiteObserver} from 'mobx-react-lite';
import {ComponentType} from 'react';
import {TCOLORS} from '../types';

type WithThemeAndLiteObserver = <T extends {}>(
  component: ComponentType<T & {theme: TCOLORS}>,
  defaultProps?: T,
) => ComponentType<T & {theme?: TCOLORS}>;

export const withObserverAndTheme = (component => {
  return compose(CustomTheme, LiteObserver)(component);
}) as WithThemeAndLiteObserver;
